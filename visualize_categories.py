import pandas as pd
import matplotlib
matplotlib.use('Agg')  
import matplotlib.pyplot as plt

def visualize_governance_categories(input_file):
    try:
        
        df = pd.read_csv(input_file)
    except FileNotFoundError:
        print(f"❌ File not found: {input_file}")
        return
    except Exception as e:
        print(f"❌ Failed to read file: {e}")
        return

    if "Category" not in df.columns:
        print("❌ 'Category' column not found in dataset.")
        return

    category_counts = df["Category"].value_counts().sort_values(ascending=False)

    print("📊 Category Breakdown:")
    print(category_counts)

  
    plt.figure(figsize=(10, 6))
    category_counts.plot(kind="bar", color="pink", edgecolor="black")
    plt.title("Number of Entries per Governance Category", fontsize=14)
    plt.xlabel("Governance Category", fontsize=12)
    plt.ylabel("Number of Entries", fontsize=12)
    plt.xticks(rotation=45, ha="right")
    plt.tight_layout()
    plt.grid(axis='y', linestyle='--', linewidth=0.7)
    plt.savefig("category_bar_chart.png")
    print("✅ Chart saved as category_bar_chart.png")

if __name__ == "__main__":
    visualize_governance_categories("ai_governance_cleaned.csv")