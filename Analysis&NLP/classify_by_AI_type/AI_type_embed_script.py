# AI_type_embed_script.py
# This script contains the same code as AI_type_embed.ipynb, except for the last two cells (batch processing and CSV-to-JSON conversion).

import fitz  # PyMuPDF
import os
import re
import tiktoken
from openai import OpenAI, AzureOpenAI
import json
import pandas as pd
import regex as regex_re
from dotenv import load_dotenv
import numpy as np
from collections import defaultdict

# --- PDF to text file ---
def pdf_to_text_file(pdf_path, output_txt_path):
    doc = fitz.open(pdf_path)
    full_text = ""
    for page in doc:
        full_text += page.get_text()
    with open(output_txt_path, "w", encoding="utf-8") as f:
        f.write(full_text)
    doc.close()
    print(f"Text saved to: {output_txt_path}")

# --- Text file pre-processing ---
def preprocess_pdf_text(text):
    text = re.sub(r'\n\d+\n', '\n', text)
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        if len(line.strip()) < 3:
            continue
        if re.match(r'^(Page|PAGE)\s*\d+', line.strip()):
            continue
        cleaned_lines.append(line)
    text = '\n'.join(cleaned_lines)
    text = re.sub(r'(\w+)-\n(\w+)', r'\1\2', text)
    text = re.sub(r'\r\n?', '\n', text)
    text = re.sub(r'(?<!\n)\n(?!\n)', ' ', text)
    text = re.sub(r'\n{2,}', '\n\n', text)
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r' +\n', '\n', text)
    text = text.strip()
    return text

# --- Chunking function ---
def chunk_text(text, chunk_size=100, overlap=15):
    encoding = tiktoken.encoding_for_model("text-embedding-3-large")
    tokens = encoding.encode(text)
    chunks = []
    for i in range(0, len(tokens), chunk_size - overlap):
        chunk = tokens[i:i + chunk_size]
        decoded = encoding.decode(chunk)
        chunks.append(decoded)
    return chunks

# --- Category definitions ---
categories = {
    "Clinical Decision Support": (
        "Artificial intelligence systems that assist healthcare providers in clinical decision-making by analyzing patient data to generate diagnostic suggestions, treatment recommendations, and personalized care plans. These tools may use rules-based logic, machine learning, or probabilistic reasoning to help clinicians make timely and evidence-based decisions, especially in complex or high-risk scenarios."
    ),
    "Clinical Documentation AI": (
        "AI applications that streamline or automate the creation, management, or structuring of clinical documentation. This includes generating summary reports, transcribing and organizing clinical notes, auto-completing documentation during consultations, and extracting structured data from free-text clinical narratives. These systems reduce administrative burden, improve documentation quality, and integrate with electronic health records (EHRs)."
    ),
    "Medical Imaging AI": (
        "AI tools used to interpret, analyze, or enhance medical imaging data such as radiology scans, pathology slides, and ophthalmology images. These systems may perform tasks like detecting abnormalities (e.g., tumors, fractures), segmenting anatomical structures, quantifying lesions, or prioritizing imaging workflows. Techniques include convolutional neural networks (CNNs), image classification, and computer vision-based diagnostics."
    ),
    "Predictive Analytics": (
        "AI models that analyze historical and real-time clinical data to forecast future patient outcomes. These models are used for risk stratification, early warning systems, prediction of readmission or mortality, and estimating treatment effectiveness. Common data inputs include vitals, labs, medications, demographics, and medical history. Techniques may include regression, time-series analysis, and deep learning."
    ),
    "Operational and Administrative Automation": (
        "AI systems designed to optimize hospital operations and administrative workflows. This includes automating scheduling, resource allocation, billing, claims management, supply chain logistics, and staff workflow optimization. These systems improve efficiency, reduce human error, and enhance the management of hospital throughput and resources using algorithms and machine learning."
    ),
    "Patient-facing AI": (
        "AI applications that interact directly with patients to support health monitoring, self-care, education, or triage. These include chatbots and virtual assistants, symptom checkers, wearable device integrations, and remote monitoring platforms. They provide personalized guidance, collect patient-reported outcomes, and may flag concerning symptoms for provider review."
    ),
    "Robotics and Surgical AI": (
        "AI systems integrated into robotic platforms used in surgical or interventional procedures. These include robotic-assisted surgery systems for enhanced precision, AI-guided tools for minimally invasive techniques, and rehabilitation robotics used post-operatively. These systems combine real-time sensing, motion control, and decision support to improve surgical outcomes and reduce human error."
    ),
    "Education and Training AI": (
        "AI tools used in healthcare education and workforce development. This includes virtual patient simulations, intelligent tutoring systems, curriculum personalization tools, and performance analytics for medical trainees. These systems aim to enhance clinical reasoning skills, procedural knowledge, and continuing education using adaptive learning and natural language processing."
    ),
    "Research and Clinical Trial AI": (
        "AI platforms that support biomedical research and clinical trial operations. These tools assist with patient cohort identification, trial design optimization, natural language processing of scientific literature, data analysis, and drug discovery. They help accelerate evidence generation, hypothesis testing, and treatment development in both pre-clinical and clinical phases."
    ),
    "Public Health AI": (
        "AI systems used to analyze population-level health data to support public health policy and intervention. Applications include epidemiological modeling, outbreak detection, surveillance of disease trends, analysis of social determinants of health, and health equity analysis. These tools support proactive, data-driven public health strategies and real-time monitoring."
    )
}

# --- Category examples ---
category_examples = {
    "Clinical Decision Support": [
        "Once validated, its use can be envisioned in a wide range of scenarios, including decision support in existing practice.",
        "Transparently disclose the use of GenAI and its role in decision making.",
        "AI suggests treatment plans for a patient based on medical history.",
        "Computerized clinical decision support systems (CCDSSs) provide patient-specific assessments or recommendations to clinicians to aid clinical decision making.",
        "Some systems suggest diagnostic tests, while others suggest treatments or preventative measures, but these should be carefully evaluated by the healthcare professional before usage."
    ],
    "Clinical Documentation AI": [
        "Electronic health record systems should integrate artificial intelligence to increase efficiency in simple documentation, allowing healthcare professionals to spend more time attending to patient needs.",
        "Generative AI usage for patient visit summaries should be approached with caution, due to risks of inaccurate information communication.",
        "GenAI-enabled clinical documentation tools assist in creating encounter summaries, generating draft notes, and extracting structured data from conversations."
    ],
    "Medical Imaging AI": [
        "Recently a transformational advance in automated retinal image analysis, using Deep Learning algorithms, has been demonstrated.",
        "Some CCDSSs include radiographic image interpretation tools that help clinicians identify abnormalities.",
        "Experts recommend using AI-assisted image analysis systems as a first consultation, deferring back to the radiologist for confirmation.",
        "Although traditional ML-based approaches dominate imaging, emerging GenAI models show promise in tasks such as image synthesis and labeling."
    ],
    "Predictive Analytics": [
        "A model trained to predict the likelihood of death from pneumonia assigned lower risk to patients with asthma, but only because such patients were treated as higher priority by the hospital.",
        "CCDSSs may calculate risk scores for conditions such as cardiovascular disease or osteoporosis, helping identify high-risk patients.",
        "Risk prediction tools integrate patient data to estimate the probability of future adverse health events."
    ],
    "Operational and Administrative Automation": [
        "AI software has been integrated into the organizational infrastructure of our hospital operations.",
        "Using AI, hospital workers' shift scheduling can be automated to reduce secretarial burdens.",
        "GenAI applications in administrative tasks include automating prior authorizations and summarizing payer policies."
    ],
    "Patient-facing AI": [
        "Kardia Mobile uses a finger pad and a smartphone app to record an EKG. The platform claims to use AI-enabled detection of atrial fibrillation.",
        "CloudUPDRS, an AI algorithm differentiates between actual tremors and bad data, enabling Parkinson's patients to perform in-home testing.",
        "There is a proliferation of companies developing apps that offer online doctors' appointments. Babylon claims to use an AI algorithm to automatically triage patients virtually.",
        "Chatbots powered by generative AI can respond to patient queries, schedule appointments, and assist in medication adherence.",
        "Concerns regarding the lack of verification in patient-facing AI tools suggest mitigation of such software in high-stakes situations."
    ],
    "Robotics and Surgical AI": [
        "AI-integrated surgical machines can help increase the precision in difficult medical procedures.",
        "In post-op physical therapy sessions, machines integrated with a patient's progress and data can help provide the appropriate training.",
        "If the AI pacemaker fails, the responsibility to which this falls upon remains ambiguous."
    ],
    "Education and Training AI": [
        "All work completed by medical students should be conducted without the usage of artifical intelligence.",
        "GenAI has potential in medical training, for example, simulating patient interactions or generating test questions tailored to learning goals.",
        "Hospitals should integrate AI into staff trainings because it provides a customized experience."
    ],
    "Research and Clinical Trial AI": [
        "We need your help to take personalized medicine to its full potential, and develop a Machine Learning algorithm that automatically classifies genetic variations.",
        "It may support clinical trial design by generating hypotheses, summarizing relevant literature, or analyzing eligibility criteria from EHR data.",
        "Using artificial intelligence in research raises concerns about fake data, which can have lasting implications on medical practices if not verified."
    ],
    "Public Health AI": [
        "Support the development of wearable devices for the sensing of environmental toxins and broad-based pathogen sensing for rural and urban environments. The collected data can inform policies for mitigating risks of pandemics and epidemics.",
        "Providing access to data captured by mHealth apps and devices could enhance the research community's ability to build more insights into public health through AI.",
        "GenAI could aid public health monitoring by extracting trends from social media, news sources, or reports, enhancing situational awareness."
    ]
}

# --- Azure OpenAI setup ---
load_dotenv()
AZURE_ENDPOINT = os.getenv("AZURE_ENDPOINT_embeddings")
AZURE_API_KEY = os.getenv("AZURE_API_KEY_embeddings")
AZURE_API_VERSION = "2025-04-01-preview"
openai = AzureOpenAI(
    azure_endpoint=AZURE_ENDPOINT,
    api_key=AZURE_API_KEY,
    api_version=AZURE_API_VERSION
)

# --- Embedding function ---
def get_embedding(text: str, model="embedding3large"):
    response = openai.embeddings.create(
        model=model,
        input=text
    )
    return response.data[0].embedding

# --- Create category def+ex embeddings ---
category_all_embeddings = {}
for label in categories:
    combined_text = categories[label] + " " + " ".join(category_examples.get(label, []))
    category_all_embeddings[label] = get_embedding(combined_text)

# --- Cosine similarity and comparison functions ---
def cosine_similarity(a, b):
    a = np.array(a)
    b = np.array(b)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def classify_with_combined_embeddings(chunk_embeddings, category_all_embeddings, threshold):
    classification = defaultdict(list)
    for idx, text, chunk_embedding in chunk_embeddings:
        for category, cat_embedding in category_all_embeddings.items():
            sim = cosine_similarity(chunk_embedding, cat_embedding)
            if sim >= threshold:
                classification[category].append((idx, sim, text))
    return classification

# --- Compute document-level similarity ---
def compute_document_level_similarity(results, category_all_embeddings, threshold=0.6):
    document_scores = {}
    for category, matches in results.items():
        if matches:
            sims = [sim for _, sim, _ in matches]
            avg_sim = sum(sims) / len(sims)
            document_scores[category] = avg_sim
        else:
            document_scores[category] = 0.0
    classified_categories = {
        category: score
        for category, score in document_scores.items()
        if score >= threshold
    }
    return document_scores, classified_categories

# --- Example usage for a single document ---
# pdf_path = "..."
# output_txt_path = "..."
# pdf_to_text_file(pdf_path, output_txt_path)
# with open(output_txt_path, "r", encoding="utf-8") as f:
#     raw_text = f.read()
# clean_text = preprocess_pdf_text(raw_text)
# chunks = chunk_text(clean_text)
# chunk_embeddings = [(i, chunk, get_embedding(chunk)) for i, chunk in enumerate(chunks)]
# results = classify_with_combined_embeddings(chunk_embeddings, category_all_embeddings, threshold=0.6)
# document_scores, classified_categories = compute_document_level_similarity(results, category_all_embeddings, threshold=0.6)
# print(document_scores)
# print(classified_categories)
