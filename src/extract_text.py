import fitz 
import os
import re

def extract_text_from_pdf(path):
    doc = fitz.open(path)
    return " ".join([page.get_text() for page in doc])

def clean_text(text):
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def process_pdfs(input_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    for fname in os.listdir(input_dir):
        if fname.endswith(".pdf"):
            raw_text = extract_text_from_pdf(os.path.join(input_dir, fname))
            cleaned = clean_text(raw_text)
            with open(os.path.join(output_dir, fname.replace(".pdf", ".txt")), "w") as f:
                f.write(cleaned)

if __name__ == "__main__":
    process_pdfs("data/raw", "data/processed")
