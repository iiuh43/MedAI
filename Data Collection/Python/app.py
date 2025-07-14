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
CSV_PATH = "ai_governance_categorized.csv"


focus_area_examples = {
    "Bias and Fairness": {
        "Equity Audits": ["equity audit", "demographic fairness testing", "fairness benchmarking", ],
        "Inclusive Design": ["inclusive design", "representation learning", "fair representation", "intersectional fairness"],
        "Discrimination Mitigation": ["discrimination prevention", "bias mitigation", "socioeconomic bias", "proxy discrimination", "algorithmic justice"],
        "Fairness Evaluation": ["fairness metrics","fairness scoring"],
        "Automation Bais": ["decision-making quality", "human oversight", "clinical safety", "trust calibration", "human factors engineering"],
        "AI-enabled discrimination": ["equity impact", "disparate outcomes", "protected class safeguards", "algorithmic inequity", "civil rights compliance", "outcome disparity review", "bias liability"]

        
    },
    "Reliability and Monitoring": {
        "Model Drift Monitoring": ["model drift", "continuous monitoring", "model versioning"],
        "Performance Auditing": ["audit logs","performance validation","system validation","robustness testing"],
        "Incident Management": ["incident logging", "fail-safe mechanisms", "outlier detection", "anomaly detection", "error reporting", "root cause analysis"],
        "Performance Evaluation":["model benchmarking", "outcome measurment", "validation studies", "operational testing", "effectiveness assessment", "performance verification", "accuracy monitoring"],
        "Impact Assessment":["socio-technical evaluation", "clinical outcome assessment", "implementation impact", "benefit-risk profiling", "systemic effects review", "operational impact analysis", "stakeholder perception evaluation"],
    },
    "Privacy and Security": {
        "Confidentiality":["information confidentiality", "patient privacy safeguards", "data anonymity controls", "confidential handling practices", "disclosure prevention", "sensitive data stewardship"],
        "Data Protection": ["data protection", "data safeguarding", "data minimization", "data residency", "secure data sharing", "encryption at rest", "encryption in transit", "secure inference"],
        "Cybersecurity Measures": ["cybersecurity protocols", "network security", "threat modeling", "zero-trust architecture", "access control", "authentication protocols",
                                   "breach detection", "insider threat mitigation", "third-party risk"],
        "Compliance Frameworks": ["HIPAA compliance", "GDPR policies", "compliance monitoring", "privacy impact assessment", "consent management", "consent verification", "risk assessments"],
        "Privacy-Preserving Techniques": ["differential privacy", "privacy-preserving ML", "secure multi-party computation", "homomorphic encryption", "federated learning", "secure aggregation", "privacy by design"]
    },
    "Transparency and Explainability": {
        "Explainable AI": ["explainable AI", "model interpretability", "interpretable modeling", "surrogate models", "explanation fidelity", "explainer modules"],
        "Algorithmic Transparency": ["algorithm transparency", "model insight", "decision traceability", "audit trails", "transparency reports", "transparency checklist", "transparency labels"],
        "User-Focused Explanation": ["user-centered explanations", "visual explanations", "model card generation", "algorithm disclosures", "model documentations", "interpretability thresholds"],
        "Public Notice": ["AI use disclosure", "public communication", "patient notification", "awareness transparency", "informed engagement", "notice and consent", "deployment disclosure"],
        "Plain-Language Documentation": ["simplified communication", "acessible information", "layperson summaries", "comprehensible reporting", "patient-friendly materials", "non-technical explanation", "plain-language guides"],
        "Adequate Documentation": ["comprehensive records", "technical documentation standards", "operational traceability", "regulatory filing", "lifecycle documentation", "complete recordkeeping","governance reporting"]
    },
    "Responsible Implementation": {
        "Governance Structures": ["AI governance frameworks", "oversight committees", "AI ethics board", "ethical review boards", "inclusive governance", "accountability mapping"],
        "Ethical Deployment": ["ethical AI", "responsible implementation", "AI-use policy", "risk-benefit analysis", "stakeholder impact assessment", "risk categorizations"],
        "Post-Deployment Monitoring": ["post-deployment monitoring", "fail-safe mechanisms", "liability mapping", "incident response plans", "continuous improvement", "feedback loops", "user feedback mechanisms"],
        "Denial of Benefits": ["access restriction oversight", "elgibility determination", "service denial review", "service denial review", "benefit allocation governance", "disparity prevention", "appeals and redress mechanisms", "rights safeguarding"],
        "Responsibly Procuring": ["ethical procurment", "vendor accountability", "due diligence review", "procurment transparency", "sourcing standards compliance", "contractual safeguards", "pre-deployment vetting"]
        
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


def sanitize_for_excel(text):
    if text is None:
        return ""
    text = ILLEGAL_CHARACTERS_RE.sub("", text)
    text = re.sub(r"\s+", " ", text)
    replacements = {
        '\u2019': "'", '\u2018': "'", '\u201c': '"', '\u201d': '"',
        '\u2014': '-', '\u2013': '-', '\u2026': '...',
        '\u00a0': ' ', '–': '-', '—': '-', '🧩': ''
    }
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    return text.strip()

def clean_text(text):
    if text is None:
        return ""
    text = text.replace("\n", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()

# URL loading
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

def safe_get(url, timeout=5, retries=1):
    for attempt in range(retries):
        try:
            return requests.get(url, stream=True, timeout=timeout)
        except RequestException as e:
            if "Name or service not known" in str(e) or "getaddrinfo failed" in str(e):
                raise RuntimeError(f"DNS resolution failed for {url}")
            print(f"⏳ Retry {attempt+1} failed: {e}")
    return None

def assign_nested_category(text, nested_embeddings, threshold=0.4):
    embedding = model.encode(text, convert_to_tensor=True)
    best_parent, best_subcat, max_sim = "Unclassified", "Unclassified", -1
    for parent, subdict in nested_embeddings.items():
        for subcat, embeddings in subdict.items():
            scores = util.cos_sim(embedding, embeddings)
            max_score = scores.max().item()
            if max_score > max_sim:
                max_sim = max_score
                best_parent, best_subcat = parent, subcat
    if max_sim < threshold:
        return ("Unclassified", "Unclassified")
    return (best_parent, best_subcat)

def assign_embedding_category(text, category_embeddings, threshold=0.4):
    embedding = model.encode(text, convert_to_tensor=True)
    best_category, max_sim = "Unclassified", -1
    for category, embeddings in category_embeddings.items():
        scores = util.cos_sim(embedding, embeddings)
        max_score = scores.max().item()
        if max_score > max_sim:
            max_sim = max_score
            best_category = category
    if max_sim < threshold:
        return "Unclassified"
    return best_category


def scrape_and_generate_excel():
    urls = load_urls_flexibly(CSV_PATH)
    failed_before = load_failed_urls()
    excel_rows = []
    failed_urls = []
    processed_urls = set()
    failed_domains_this_run = set()

    total_all = sum(len(v) for v in urls.values())
    start_time = time.time()
    processed_count = 0

    for org_type, org_urls in urls.items():
        for idx, url in enumerate(org_urls, start=1):
            domain = re.sub(r"^https?://([^/]+).*", r"\1", url)
            if domain in failed_domains_this_run:
                print(f"⏭️ Skipping domain with repeated DNS failures: {domain}")
                failed_urls.append(url)
                continue

            if url in failed_before:
                print(f"⏭️ Skipping known failed URL: {url}")
                continue
            if url in processed_urls:
                print(f"⏭️ Already processed URL in this run: {url}")
                continue

            processed_count += 1
            print(f"\nScraping ({processed_count}/{total_all}) [{(processed_count / total_all) * 100:.1f}%]")
            try:
                response = safe_get(url)
            except RuntimeError as e:
                print(f"❌ {e}")
                failed_domains_this_run.add(domain)
                failed_urls.append(url)
                continue

            if response is None:
                print(f"❌ Failed to retrieve: {url}")
                failed_urls.append(url)
                continue

            if int(response.headers.get("Content-Length", 0)) > 10 * 1024 * 1024:
                print(f"⚠️ Skipping large file (>10MB): {url}")
                failed_urls.append(url)
                continue

            try:
                text_content = ""
                if "pdf" in response.headers.get("Content-Type", ""):
                    with fitz.open(stream=response.content, filetype="pdf") as doc:
                        for page in doc:
                            text_content += page.get_text()
                else:
                    soup = BeautifulSoup(response.content, "html.parser")
                    paragraphs = soup.find_all("p")
                    text_content = " ".join(p.get_text() for p in paragraphs)

                if not text_content.strip():
                    print(f"⚠️ No usable text from: {url}")
                    failed_urls.append(url)
                    continue

                cleaned_text = clean_text(text_content)
                date_str = datetime.now().strftime("%Y-%m-%d")

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

                processed_urls.add(url)

                if processed_count % 50 == 0:
                    temp_df = pd.DataFrame(excel_rows)
                    temp_filename = "progress_temp.csv.part"
                    temp_df.to_csv(temp_filename, index=False, encoding="utf-8")
                    os.replace(temp_filename, "progress_temp.csv")
                    print("💾 Temporary CSV progress saved safely.")

            except Exception as e:
                print(f"❌ Error processing {url}: {e}")
                failed_urls.append(url)

            elapsed = time.time() - start_time
            eta = (total_all - processed_count) * (elapsed / processed_count)
            print(f"⏱ Elapsed: {elapsed/60:.1f} min | ETA: {eta/60:.1f} min")

    print("\n🔍 Checking for remaining illegal characters...")
    for i, row in enumerate(excel_rows):
        for k, v in row.items():
            if ILLEGAL_CHARACTERS_RE.search(str(v)):
                print(f"⚠️ Row {i}, column '{k}' still has illegal characters.")

    final_df = pd.DataFrame(excel_rows).drop_duplicates(subset="URL", keep="first")
    final_temp = "ai_governance_summary_temp.csv"
    final_df.to_csv(final_temp, index=False, encoding="utf-8")
    os.replace(final_temp, "ai_governance_summary.csv")
    print("📊 CSV file saved safely as ai_governance_summary.csv")

    with open("failed_urls.txt", "w") as f:
        f.write("\n".join(set(failed_urls)))
    print("📝 Failed URLs saved.")


if __name__ == "__main__":
    scrape_and_generate_excel()


