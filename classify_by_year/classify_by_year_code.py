import pandas as pd
import requests
import fitz  # PyMuPDF
import re
from io import BytesIO
from tqdm import tqdm

# Load the dataset
df = pd.read_csv("FINAL_dataset.csv")

# Function to extract the likely publication year from a PDF
def extract_year_from_pdf_with_index(row):
    url = row["URL"]
    row_num = row.name + 1  # 1-based index for clarity

    try:
        # Add headers to mimic a browser
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()

        # Extract text using PyMuPDF
        with fitz.open(stream=BytesIO(response.content), filetype="pdf") as doc:
            text = ""
            for page in doc:
                text += page.get_text()
                if len(text) > 3000:  # Limit to first few pages
                    break

        # Search for 4-digit years in range 1900–2099
        years = re.findall(r"\b(19\d{2}|20\d{2})\b", text)
        if not years:
            return None

        # Frequency-based heuristic
        year_counts = {}
        for year in years:
            year_counts[year] = year_counts.get(year, 0) + 1

        likely_year = max(year_counts, key=year_counts.get)
        return likely_year

    except Exception as e:
        print(f"[Row {row_num}] Failed to process: {url}\n  Reason: {e}")
        return None

# Add tqdm progress bar
tqdm.pandas()
df["Year"] = df.progress_apply(extract_year_from_pdf_with_index, axis=1)

# Save results
df.to_csv("FINAL_dataset_with_years.csv", index=False)
print("Done! Saved as FINAL_dataset_with_years.csv")
