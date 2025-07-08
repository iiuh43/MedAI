import pandas as pd
import os
import requests
import time

CSV_PATH = r"C:\Users\joeva\Downloads\ai_gov\data_collection\data\ai_governance_categorized_01.csv"             
DOWNLOAD_DIR = r"C:\Users\joeva\Downloads\ai_gov\data\raw"           
BATCH_SIZE = 1000                         
TIMEOUT = 30                           

os.makedirs(DOWNLOAD_DIR, exist_ok=True)

df = pd.read_csv(CSV_PATH)

if "Status" not in df.columns:
    df["Status"] = "pending"
if "Local Filename" not in df.columns:
    df["Local Filename"] = ""

pending_df = df[df["Status"] == "pending"].head(BATCH_SIZE)

print(f"Starting batch download of {len(pending_df)} PDFs...")

for idx, row in pending_df.iterrows():
    url = row["PDF Link"]
    local_filename = os.path.join(DOWNLOAD_DIR, f"doc_{idx}.pdf")
    
    try:
        response = requests.get(url, timeout=TIMEOUT)
        response.raise_for_status()
        
        with open(local_filename, "wb") as f:
            f.write(response.content)

        df.at[idx, "status"] = "done"
        df.at[idx, "local filename"] = local_filename
        print(f"downloaded: {url}")

    except Exception as e:
        df.at[idx, "Status"] = "error"
        print(f"failed to download {url} — {e}")

    time.sleep(1) 

df.to_csv(CSV_PATH, index=False)