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
            pdf_path = os.path.join(input_dir, fname)
            try:
                raw_text = extract_text_from_pdf(pdf_path)
                cleaned = clean_text(raw_text)
                out_path = os.path.join(output_dir, fname.replace(".pdf", ".txt"))
                with open(out_path, "w", encoding="utf-8", errors="replace") as f:
                    f.write(cleaned)
            except Exception as e:
                print(f"Failed to process {fname}: {e}")

if __name__ == "__main__":
    process_pdfs(r"C:\Users\joeva\Downloads\ai_gov\data\raw", r"C:\Users\joeva\Downloads\ai_gov\data\processed")