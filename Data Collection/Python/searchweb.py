import requests
import csv
import time


GOOGLE_API_KEY = "AIzaSyDbGM2FZaSHwdgXPMViQjymNBY5XqEByqM"
GOOGLE_CX = "115b0434af54e43f7"
SERPAPI_KEY = "e3f3d6f8670ab64bf9209a531ac665b0f2c2cb6da64e3c69c1859b6d847299ce"

TOPICS = [
    "medical AI tools", "trust calibration between clinicians and AI tools", "AI accountability in clinical workflows", "AI incident reporting protocols in hospital systems",
    "intersectional bias in clinical AI", "blockchain for secure AI model training in healthcare", "intersectional bias in clinical AI",
    "role-based data access governance for clinical AI systems", "AI ethics and public trust in patient-facing technologies", "governace of hybrid decision-making (AI + human)", 
    "ethical AI deployment in resource-limited healthcare settings", "governance of clinicians override and second opinion systems", 
    "AI governance scalability in national systems", "saftey of AI recommendations in patient care", "detecting and reducing bias in healthcare AI models",
    "balance of AI implementation and patient privacy protection", "governance of continuously learning AI systems in healthcare", "thresholds for acceptable AI performance in care setting",
    "post deployment monitoring for AI systems", "AI medical devices", "clinicians liability when using AI-powered decision support tools", "trust repair strategies after AI-related clinical errors", 
    "measuring disparate impact of AI predictions on underserved populations ", "bias amplification in AI models trained on historical ", "approval workflows for integrating third-party AI services into EHRs",
    "policies for retiring or decommissioning unsafe AI tools", "thresholds for intervention when AI predictions conflict with clinician judgement ", "privacy-preserving AI training techniques on federated health data",
    "blockchain-enabled audit trials for AI decision logs", "scaling AI governance in multi-hospital networks", "ethics of cross-border AI-enabled telemedicine", "legal and regulatory frameworks governing AI in clinical decision support", 
    "liability and malpractice in AI-augmented clinical care", "ISO stardard for AI in healthcare", "ethical considerations for AI in clinical trials", "AI governance frameworks for personalized medicine",
]

FEDERAL_DOMAINS = [
    "fda.gov", "hhs.gov", "healthit.gov", "nih.gov", "nist.gov", "cms.gov", "cdc.gov", "whitehouse.gov", "aim-ahead.net", "nist.gov", "405d.hss.gov"
]
STATE_DOMAINS = [
    "alabama.gov", "alaska.gov", "az.gov", "arkansas.gov", "ca.gov", "ct.gov", "delaware.gov", "myflorida.com", "georgia.gov", "hawaii.gov",
    "idaho.gov", "illinois.gov", "in.gov", "iowa.gov", "kansas.gov", "ky.gov", "louisiana.gov", "maine.gov", "maryland.gov", "mass.gov", 
    "michigan.gov", "mn.gov", "ms.gov", "mo.gov", "mt.gov", "nebraska.gov", "nv.gov", "nh.gov", "nj.gov", "nm.gov", "ny.gov", "nc.gov", "nd.gov",
    "ohio.gov", "oregon.gov", "pa.gov", "ri.gov", "sc.gov", "tn.gov", "texas.gov", "utah.gov", "vermont.gov", "virginia.gov", "wa.gov", "wv.gov",
    "wisconsin.gov", "wyoming.gov"
]
OTHER_DOMAINS = [
     ".org", ".edu", ".com", "ahima.org", "chai.org", "Bioethics.net", "coalitionforhealthai.org", "nam.edu", "ama-assn.org",
     "amia.org", "himss.org", "jointcommisssion.org", "hitrustalliance.net", "aha.org", "acr.org", "ihi.org", "chimecentral.org",
     "acep.org", "ruralhealth.us"
]

def build_search_terms():
    terms = []
    for topic in TOPICS:
        for domain in FEDERAL_DOMAINS + STATE_DOMAINS + OTHER_DOMAINS:
            terms.append(f"{topic} site:{domain} filetype:pdf")
    return terms

def google_search(query, num_results=10):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": GOOGLE_API_KEY,
        "cx": GOOGLE_CX,
        "q": query,
        "num": num_results
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        results = response.json()
        return [item["link"] for item in results.get("items", []) if item["link"].endswith(".pdf")]
    except Exception as e:
        print(f"❌ Google Search error: {e}")
        return []

def scholar_search(query, num_results=5):
    url = "https://serpapi.com/search"
    params = {
        "engine": "google_scholar",
        "q": query,
        "api_key": SERPAPI_KEY,
        "num": num_results
    }
    try:
        res = requests.get(url, params=params)
        results = res.json()
        return [r.get("link") for r in results.get("organic_results", []) if r.get("link", "").endswith(".pdf")]
    except Exception as e:
        print(f"⚠️ Scholar Search error: {e}")
        return []

def categorize_link(link):
    domain = link.split("/")[2]
    if domain.endswith(".gov"):
        if any(domain.endswith(sd) for sd in STATE_DOMAINS):
            return "State"
        else:
            return "Federal"
    elif any(x in domain for x in [".edu", ".org", "ama-assn", "himss", "chimecentral", "amia", "healthit", "aamc"]):
        return "Professional"
    else:
        return "Professional"

def save_links(categorized_links, filename="ai_governance_categorized.csv"):
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Category", "PDF Link"])
        for category, link in categorized_links:
            writer.writerow([category, link])
    print(f"[✅] Saved {len(categorized_links)} links to {filename}")

def run_search():
    search_terms = build_search_terms()
    categorized_links = []

    for i, query in enumerate(search_terms, 1):
        print(f"🔍 [{i}/{len(search_terms)}] {query}")
        google_links = google_search(query)
        scholar_links = scholar_search(query)

        all_found = google_links + scholar_links
        print(f"📄 Found {len(all_found)} PDF links")
        for link in all_found:
            category = categorize_link(link)
            categorized_links.append((category, link))

        time.sleep(4)

    print(f"\n📊 Total collected: {len(categorized_links)} PDF links")
    return categorized_links

if __name__ == "__main__":
    results = run_search()
    save_links(results)

