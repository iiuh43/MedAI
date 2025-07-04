import os
import pandas as pd
from fpdf import FPDF

# Load your Excel file
df = pd.read_excel("progress_temp.xlsx")

# Ensure output directory exists
output_dir = "categorized_pdfs"
os.makedirs(output_dir, exist_ok=True)

# Group text by category
grouped = df.groupby("Category")

# Loop through each category and create a PDF
for category, group in grouped:
    # Initialize PDF
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)

    # Loop through all text entries in this category
    for idx, row in group.iterrows():
        text = str(row["Text"]).strip()
        url = str(row.get("URL", "")).strip()
        date = str(row.get("Date", "")).strip()

        if not text or text.lower() == "nan":
            continue

        pdf.add_page()
        pdf.set_font("Arial", "B", 14)
        pdf.multi_cell(0, 10, f"Category: {category}")
        pdf.set_font("Arial", "", 12)
        if date:
            pdf.multi_cell(0, 10, f"Date: {date}")
        if url:
            pdf.multi_cell(0, 10, f"Source: {url}")
        pdf.ln(5)
        pdf.multi_cell(0, 10, text)

    # Generate safe filename (no slashes etc)
    safe_category = "".join(c if c.isalnum() else "_" for c in str(category))
    filename = os.path.join(output_dir, f"{safe_category}.pdf")

    # Output the PDF if it has content
    if len(group) > 0:
        pdf.output(filename)
        print(f"✅ Generated PDF for category: {category}")
    else:
        print(f"⚠️ Skipped empty category: {category}")

print("🎉 All PDFs generated successfully.")

