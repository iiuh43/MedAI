import requests
from bs4 import BeautifulSoup
import os
import time
from datetime import datetime
import pandas as pd
import fitz
from requests.exceptions import RequestException
from sentence_transformers import SentenceTransformer, util
import re
from openpyxl.cell.cell import ILLEGAL_CHARACTERS_RE


print("🔄 Loading embedding model...")
model = SentenceTransformer("all-MiniLM-L6-v2")


focus_area_examples = {
    "Bias and Fairness": {
        "Equity Audits": ["equity audit", "demographic fairness testing", "fairness benchmarking" ],
        "Inclusive Design": ["inclusive design", "representation learning", "fair representation", "intersectional fairness"],
        "Discrimination Mitigation": ["discrimination prevention", "bias mitigation", "socioeconomic bias", "proxy discrimination", "algorithmic justice"],
        "Fairness Evaluation": ["fairness metrics","fairness scoring"]
    },
    "Reliability and Monitoring": {
        "Model Drift Monitoring": ["model drift", "continuous monitoring", "model versioning"],
        "Performance Auditing": ["audit logs","performance validation","system validation","robustness testing"],
        "Incident Management": ["incident logging", "fail-safe mechanisms", "outlier detection", "anomaly detection", "error reporting", "root cause analysis"],
    },
    "Privacy and Security": {
        "Data Protection": ["data protection", "data safeguarding", "data minimization", "data residency", "secure data sharing", "encryption at rest", "encryption in transit", "secure inference"],
        "Cybersecurity Measures": ["cybersecurity protocols", "network security", "threat modeling", "zero-trust architecture", "access control", "authentication protocols",
                                   "breach detection", "insider threat mitigation", "third-party risk"],
        "Compliance Frameworks": ["HIPAA compliance", "GDPR policies", "compliance monitoring", "privacy impact assessment", "consent management", "consent verification", "risk assessments"],
        "Privacy-Preserving Techniques": ["differential privacy", "privacy-preserving ML", "secure multi-party computation", "homomorphic encryption", "federated learning", "secure aggregation", "privacy by design"]
    },
    "Transparency and Explainability": {
        "Explainable AI": ["explainable AI", "model interpretability", "interpretable modeling", "surrogate models", "explanation fidelity", "explainer modules"],
        "Algorithmic Transparency": ["algorithm transparency", "model insight", "decision traceability", "audit trails", "transparency reports", "transparency checklist", "transparency labels"],
        "User-Focused Explanation": ["user-centered explanations", "visual explanations", "model card generation", "algorithm disclosures", "model documentations", "interpretability thresholds"]
    },
    "Responsible Implementation": {
        "Governance Structures": ["AI governance frameworks", "oversight committees", "AI ethics board", "ethical review boards", "inclusive governance", "accountability mapping"],
        "Ethical Deployment": ["ethical AI", "responsible implementation", "AI-use policy", "risk-benefit analysis", "stakeholder impact assessment", "risk categorizations"],
        "Post-Deployment Monitoring": ["post-deployment monitoring", "fail-safe mechanisms", "liability mapping", "incident response plans", "continuous improvement", "feedback loops", "user feedback mechanisms"],
    }
}


jurisdiction_examples = {
    "Federal": ["federal regulations", "national guidelines"],
    "State": ["state policies", "state regulations"],
    "Private Sector": ["private sector standards", "industry-led initiatives"]
}

context_examples = {
    "Hospitals": ["hospital settings", "acute care facilities"],
    "Rural Clinics": ["rural clinics", "underserved areas"],
    "Emergency Settings": ["emergency care", "emergency departments"]
}

ai_type_examples = {
    "Predictive Model": ["predictive analytics", "risk prediction model"],
    "Generative Model": ["generative AI", "language models"],
    "Multimodal": ["multimodal AI", "combining image and text data"]
}

source_examples = {
    "Government": ["FDA", "HHS", "NIH", "federal agency", "state department", "alabama.gov", "alaska.gov", "az.gov", "arkansas.gov", "ca.gov", 
    "ct.gov", "delaware.gov", "myflorida.com", "georgia.gov", "hawaii.gov", "idaho.gov", "illinois.gov", "in.gov", "iowa.gov", "kansas.gov", "ky.gov", 
    "louisiana.gov", "maine.gov", "maryland.gov", "mass.gov", "michigan.gov", "mn.gov", "ms.gov", "mo.gov", "mt.gov", "nebraska.gov", "nv.gov", "nh.gov", 
    "nj.gov", "nm.gov", "ny.gov", "nc.gov", "nd.gov","ohio.gov", "oregon.gov", "pa.gov", "ri.gov", "sc.gov", "tn.gov", "texas.gov", "utah.gov", "vermont.gov", 
    "virginia.gov", "wa.gov", "wv.gov","wisconsin.gov", "wyoming.gov"],
    "Nonprofit": ["Coalition for Health AI", "NAM", "IHI", "Bioethics.net"],
    "For-Profit": ["Google", "Microsoft", "Epic Systems", "private sector company"]
}

geographic_context_examples = {
    "Urban": ["urban hospitals", "metropolitan"],
    "Suburban": ["suburban clinics"],
    "Rural": ["rural health center", "telehealth", "telemedicine"]
}

actionability_examples = {
    "Actionable Governance": ["implementation plan", "policy document", "compliance guide"],
    "Vision Strategy": ["vision statement", "roadmap", "strategy white paper"]
}

CSV_PATH = "ai_governance_categorized.csv"


def encode_nested_category_dict(nested_dict):
    encoded = {}
    for parent, subcats in nested_dict.items():
        encoded[parent] = {}
        for subcat, phrases in subcats.items():
            encoded[parent][subcat] = model.encode(phrases, convert_to_tensor=True)
    return encoded

def encode_category_dict(example_dict):
    encoded = {}
    for category, phrases in example_dict.items():
        embeddings = model.encode(phrases, convert_to_tensor=True)
        encoded[category] = embeddings
    return encoded

focus_area_embeddings = encode_nested_category_dict(focus_area_examples)
jurisdiction_embeddings = encode_category_dict(jurisdiction_examples)
context_embeddings = encode_category_dict(context_examples)
ai_type_embeddings = encode_category_dict(ai_type_examples)
source_embeddings = encode_category_dict(source_examples)
geo_embeddings = encode_category_dict(geographic_context_examples)
actionability_embeddings = encode_category_dict(actionability_examples)


def assign_nested_category(text, nested_embeddings, threshold=0.4):
    embedding = model.encode(text, convert_to_tensor=True)
    best_parent = "Unclassified"
    best_subcat = "Unclassified"
    max_sim = -1
    for parent, subdict in nested_embeddings.items():
        for subcat, embeddings in subdict.items():
            scores = util.cos_sim(embedding, embeddings)
            max_score = scores.max().item()
            if max_score > max_sim:
                max_sim = max_score
                best_parent = parent
                best_subcat = subcat
    if max_sim < threshold:
        return ("Unclassified", "Unclassified")
    return (best_parent, best_subcat)

def assign_embedding_category(text, category_embeddings, threshold=0.4):
    embedding = model.encode(text, convert_to_tensor=True)
    best_category = "Unclassified"
    max_sim = -1
    for category, embeddings in category_embeddings.items():
        scores = util.cos_sim(embedding, embeddings)
        max_score = scores.max().item()
        if max_score > max_sim:
            max_sim = max_score
            best_category = category
    if max_sim < threshold:
        return "Unclassified"
    return best_category


import re
from openpyxl.cell.cell import ILLEGAL_CHARACTERS_RE

def sanitize_for_excel(text):
    """
    Remove characters not allowed in Excel cells.
    """
    if text is None:
        return ""
    # Remove illegal characters
    text = ILLEGAL_CHARACTERS_RE.sub("", text)
    # Normalize whitespace
    text = re.sub(r"\s+", " ", text)
    # Replace problematic unicode punctuation
    replacements = {
        '\u2019': "'", '\u2018': "'", '\u201c': '"', '\u201d': '"',
        '\u2014': '-', '\u2013': '-', '\u2026': '...',
        '\u00a0': ' ', '–': '-', '—': '-', '🧩': ''
    }
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    return text.strip()



def load_failed_urls():
    if os.path.exists("failed_urls.txt"):
        with open("failed_urls.txt") as f:
            return set(line.strip() for line in f if line.strip())
    return set()


def load_urls_flexibly(path):
    try:
        df = pd.read_csv(path)
        if 'Category' in df.columns and 'PDF Link' in df.columns:
            return df.groupby('Category')['PDF Link'].apply(list).to_dict()
        elif 'URL' in df.columns:
            return {'all': df['URL'].dropna().tolist()}
        else:
            raise ValueError("CSV must contain 'PDF Link' or 'URL' column.")
    except Exception as e:
        print(f"❌ Failed to load {path}: {e}")
        return {}


def safe_get(url, timeout=15, retries=2):
    for attempt in range(retries):
        try:
            return requests.get(url, stream=True, timeout=timeout)
        except RequestException as e:
            print(f"⏳ Retry {attempt+1} failed: {e}")
    return None


def scrape_and_generate_excel():
    urls = load_urls_flexibly(CSV_PATH)
    failed_before = load_failed_urls()
    excel_rows = []
    failed_urls = []
    total_all = sum(len(v) for v in urls.values())
    start_time = time.time()
    processed_count = 0

    for org_type, org_urls in urls.items():
        for idx, url in enumerate(org_urls, start=1):
            processed_count += 1

            if url in failed_before:
                print(f"⏭️ Skipping known failed URL: {url}")
                continue

            print(f"Scraping ({processed_count}/{total_all}) [{(processed_count / total_all) * 100:.1f}%]")

            response = safe_get(url)
            if response is None:
                failed_urls.append(url)
                continue

            content_length = int(response.headers.get("Content-Length", 0))
            if content_length > 10 * 1024 * 1024:
                print(f"⚠️ Skipping large file ({content_length / 1024 / 1024:.2f} MB): {url}")
                failed_urls.append(url)
                continue

            content_type = response.headers.get("Content-Type", "")
            try:
                text_content = ""
                if "pdf" in content_type:
                    print(f"📄 Extracting PDF: {url}")
                    with fitz.open(stream=response.content, filetype="pdf") as doc:
                        for page in doc:
                            text_content += page.get_text()
                else:
                    soup = BeautifulSoup(response.content, "html.parser")
                    paragraphs = soup.find_all("p")
                    text_content = " ".join([p.get_text().strip() for p in paragraphs])

                if not text_content.strip():
                    print(f"⚠️ No usable text from: {url}")
                    failed_urls.append(url)
                    continue

                date_str = datetime.now().strftime("%Y-%m-%d")
                cleaned_text = clean_text(text_content)

                focus_parent, focus_subcat = assign_nested_category(cleaned_text, focus_area_embeddings)
                jurisdiction = assign_embedding_category(cleaned_text, jurisdiction_embeddings)
                context = assign_embedding_category(cleaned_text, context_embeddings)
                ai_type = assign_embedding_category(cleaned_text, ai_type_embeddings)
                source = assign_embedding_category(cleaned_text, source_embeddings)
                geo = assign_embedding_category(cleaned_text, geo_embeddings)
                actionability = assign_embedding_category(cleaned_text, actionability_embeddings)

                excel_rows.append({
                    "Date": sanitize_for_excel(date_str),
                    "Focus Area": sanitize_for_excel(focus_parent),
                    "Subcategory": sanitize_for_excel(focus_subcat),
                    "Jurisdiction": sanitize_for_excel(jurisdiction),
                    "Context": sanitize_for_excel(context),
                    "AI Type": sanitize_for_excel(ai_type),
                    "Source": sanitize_for_excel(source),
                    "Geographic Context": sanitize_for_excel(geo),
                    "Actionability": sanitize_for_excel(actionability),
                    "URL": sanitize_for_excel(url),
                    "Text": sanitize_for_excel(cleaned_text)
                })

                if processed_count % 100 == 0:
                    pd.DataFrame(excel_rows).to_excel("progress_temp.xlsx", index=False)
                    with open("failed_temp.txt", "w") as f:
                        f.write("\n".join(failed_urls))
                    print("💾 Temporary progress saved.")

            except Exception as e:
                print(f"❌ Error processing {url}: {e}")
                failed_urls.append(url)

            elapsed = time.time() - start_time
            rate = elapsed / processed_count if processed_count else 0
            remaining = (total_all - processed_count) * rate
            print(f"⏱ Elapsed: {elapsed / 60:.1f} min | ETA: {remaining / 60:.1f} min")

    print("🔍 Checking for remaining illegal characters...")
    for i, row in enumerate(excel_rows):
        for k, v in row.items():
            if ILLEGAL_CHARACTERS_RE.search(str(v)):
                print(f"⚠️ Row {i}, column '{k}' still has illegal characters.")

    pd.DataFrame(excel_rows).to_excel("ai_governance_summary.xlsx", index=False)
    print("📊 Excel file saved as ai_governance_summary.xlsx")

    with open("failed_urls.txt", "w") as f:
        f.write("\n".join(set(failed_urls)))
    print("📝 Failed URLs saved to failed_urls.txt")


if __name__ == "__main__":
    scrape_and_generate_excel()
