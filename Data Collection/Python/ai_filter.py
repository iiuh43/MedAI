import pandas as pd
import PyPDF2
import os
import requests
import tempfile
import time
from urllib.parse import urlparse

# List of unwanted AI meanings
non_ai_keywords = [
    "Artificial Insemination", "Active Ingredient", "Analog Input", "Academic Integrity",
    "Adequate Intake", "Adverse Impact", "Air India", "Adobe Illustrator", "American Idol",
    "Allen Iverson", "All-In", "Aortic Insufficiency", "Adrenal Insufficiency", "Air Interface",
    "American Indian", "Asset Integrity", "Articulation Index", "Asphalt Institute",
    "Appraisal Institute", "Airborne Interception"
]

# Normalize for lowercase checking
non_ai_keywords = [k.lower() for k in non_ai_keywords]

# Main function
def filter_pdfs_from_csv(csv_path, pdf_column="file_path"):
    df = pd.read_csv(csv_path)
    print(f"🔍 Found {len(df)} entries in '{csv_path}'")
    
    matched_rows = []
    remaining_rows = []
    processed_count = 0

    for idx, row in df.iterrows():
        pdf_url = row[pdf_column]
        processed_count += 1
        
        print(f"📥 Processing {processed_count}/{len(df)}: {pdf_url[:100]}...")
        
        # Check if it's a URL or local file
        if pdf_url.startswith(('http://', 'https://')):
            # Download PDF from URL
            try:
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
                response = requests.get(pdf_url, headers=headers, timeout=30, stream=True)
                response.raise_for_status()
                
                # Create temporary file
                with tempfile.NamedTemporaryFile(delete=False, suffix='.pdf') as temp_file:
                    for chunk in response.iter_content(chunk_size=8192):
                        if chunk:
                            temp_file.write(chunk)
                    temp_pdf_path = temp_file.name
                
                try:
                    # Process the downloaded PDF
                    with open(temp_pdf_path, "rb") as f:
                        reader = PyPDF2.PdfReader(f)
                        full_text = "".join(page.extract_text() or "" for page in reader.pages)
                        
                    # Clean up temporary file
                    os.unlink(temp_pdf_path)
                    
                except Exception as e:
                    print(f"⚠️ Error reading PDF from {pdf_url}: {e}")
                    # Clean up temporary file if it exists
                    if os.path.exists(temp_pdf_path):
                        os.unlink(temp_pdf_path)
                    continue
                    
            except Exception as e:
                print(f"❌ Error downloading {pdf_url}: {e}")
                continue
                
        else:
            # Handle local file (original logic)
            if not os.path.exists(pdf_url):
                print(f"❌ Skipping missing file: {pdf_url}")
                continue

            try:
                with open(pdf_url, "rb") as f:
                    reader = PyPDF2.PdfReader(f)
                    full_text = "".join(page.extract_text() or "" for page in reader.pages)
            except Exception as e:
                print(f"⚠️ Error reading {pdf_url}: {e}")
                continue

        # Check for non-AI keywords in the text
        if any(keyword in full_text.lower() for keyword in non_ai_keywords):
            matched_rows.append(row)
            print(f"🔍 Found non-AI content: {pdf_url[:100]}...")
        else:
            remaining_rows.append(row)
            
        # Add small delay to be respectful to servers
        time.sleep(0.5)

    # Output results
    pd.DataFrame(matched_rows).to_csv("non_ai_matches.csv", index=False)
    pd.DataFrame(remaining_rows).to_csv("ai_filtered.csv", index=False)
    
    print(f"✅ Done. Filtered out {len(matched_rows)} files. Retained {len(remaining_rows)} files.")

# Run the function if script is executed directly
if __name__ == "__main__":
    filter_pdfs_from_csv("ai_governance_categorized.csv", pdf_column="PDF Link")
