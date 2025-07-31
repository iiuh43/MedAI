import pandas as pd
import os

def save_failed_docs(failed_links, output_dir, filename):
    """
    Append a list of failed PDF links to a CSV file.

    Args:
        failed_links (list): List of failed PDF links (strings).
        output_dir (str): Directory where the CSV will be saved.
        filename (str): Name of the CSV file (default: 'failed_docs.csv').
    """
    if not failed_links:
        print("No failed documents to save.")
        return

    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, filename)

    # If file exists, read existing links to avoid duplicates
    if os.path.exists(output_path):
        existing_df = pd.read_csv(output_path)
        existing_links = set(existing_df["PDF Link"].astype(str))
    else:
        existing_links = set()

    # Only add new failed links
    new_links = [link for link in failed_links if str(link) not in existing_links]
    if not new_links:
        print("No new failed documents to append.")
        return

    df = pd.DataFrame({"PDF Link": new_links})
    # Append without header if file exists
    df.to_csv(output_path, mode='a', header=not os.path.exists(output_path), index=False)
    print(f"Appended {len(new_links)} new failed links to {output_path}")