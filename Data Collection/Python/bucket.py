import pandas as pd
from collections import defaultdict

data = pd.read_excel("progress_temp.xlsx")


focus_area_keywords = {
    "Bias and Fairness": ["bias", "fairness", "equity", "discrimination", "inclusive", "representation", "justice", "marginalized", "underrepresented", "diversity","agenda", "hyperbole", "uncounscious bias", "discriminatory", "stereotypes", "discriminatory", "discriminatory stereotypes", "stereotypes", "racial bias", "gender bias", "ageism", "stereotypes relating to black people", "prejudice", "disparate impact", "systemic bias", "structural racism", "bias agenda", "censorship", "censoring content", "fact-checking", "banning conservatives", "conservatives unfairly", "equality training", "critical race theory", "ideological bias", "social media companies", "news agenda", "evaluating sources", "misinformation", "disinformation", "echo chamber", "filter bubble", "exaggerated claims", "exaggerated statements", "not meant to be taken literally", "underlying intentions", "underlying motives", "media literacy", "detecting media bias", "evaluating bias", "diversity education", "ethnocentrism", "cultural sensitivity", "intersectionality"],
    "Reliability and Monitoring": ["monitoring", "validation", "performance", "testing", "reliable", "reliability", "accuracy", "robustness", "evaluation", "assurance", "quality control", "performance monitoring", "systematic evaluation", "continuous improvement" "metrics", "observebality", "traceability", "auditability", "performance metrics", "systematic evaluation", "continuous improvement", "quality assurance", "quality control"],
    "Privacy and Security": ["privacy", "security", "HIPAA", "confidential", "cybersecurity", "data protection", "encryption", "compliance", "safeguarding", "protection", "confidentiality", "data security", "information security", "data governance", "data privacy", "data integrity", "data confidentiality", "HIPAA", "GDPR", "data protection regulations", "data breach", "data misuse", "data access control", "data anonymization", "data pseudonymization", "data encryption", "data retention policies"],
    "Transparency and Explainability": ["transparency", "explain", "interpretable", "clear", "understand", "interpretability", "clarity", "insight", "comprehensible", "impact of AI technology", "explainable AI", "transparent AI", "model interpretability", "algorithmic transparency", "decision-making process", "model explainability", "algorithmic explainability", "model transparency", "algorithm transparency", "decision transparency", "explainable algorithms", "transparent algorithms"],
    "Responsible Implementation": ["deployment", "governance", "framework", "oversight", "guidelines", "responsible AI", "ethical AI", "accountability", "regulation", "standards", "implementation", "governance framework", "ethical guidelines", "responsible deployment", "AI governance", "AI ethics", "AI accountability", "AI regulation", "AI standards", "AI implementation"],
}

jurisdiction_keywords = {
    'federal': ['federal', 'national', 'HHS', 'FDA'],
    'state': ['state', 'California', 'New York', 'Massachusetts'],
    'private sector': ['private', 'hospital group', 'provider network']
}

context_keywords = {
    'hospitals': ['hospital', 'acute care'],
    'rural clinics': ['rural', 'underserved'],
    'emergency settings': ['emergency', 'urgent', 'ED']
}

ai_type_keywords = {
    'predictive model': ['predictive', 'forecast', 'risk stratification'],
    'generative model': ['generative', 'LLM', 'language model'],
    'multimodal': ['multimodal', 'image + text', 'combined data']
}


def assign_bucket(text, keyword_dict):
    text = str(text).lower()
    for category, keywords in keyword_dict.items():
        if any(kw in text for kw in keywords):
            return category
    return "Unclassified"


results = []

for idx, row in data.iterrows():
    text = row['Text']
    focus_area = assign_bucket(text, focus_area_keywords)
    jurisdiction = assign_bucket(text, jurisdiction_keywords)
    context = assign_bucket(text, context_keywords)
    ai_type = assign_bucket(text, ai_type_keywords)

    results.append({
        'Focus Area': focus_area,
        'Jurisdiction': jurisdiction,
        'Context': context,
        'AI Type': ai_type
    })


results_df = pd.DataFrame(results)


counts = results_df.groupby(['Focus Area', 'Jurisdiction', 'Context', 'AI Type']).size().reset_index(name='Count')


print("=== Bucketed Counts ===")
print(counts)


unclassified = results_df[
    (results_df['Focus Area'] == 'Unclassified') |
    (results_df['Jurisdiction'] == 'Unclassified') |
    (results_df['Context'] == 'Unclassified') |
    (results_df['AI Type'] == 'Unclassified')
]

print("\n=== Gaps / Unclassified Records ===")
print(unclassified)
