import os
import re
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.feature_extraction.text import TfidfVectorizer
import matplotlib.pyplot as plt
import umap
import hdbscan
from sklearn.metrics.pairwise import cosine_similarity
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import nltk

nltk.download('stopwords')
nltk.download('wordnet')

# Custom stopwords
custom_stopwords = set(stopwords.words('english') + ["ai", "use", "data", "state", "including", "systems", "artificial", "intelligence", "genai", "digital", "gai"])
lemmatizer = WordNetLemmatizer()

def preprocess(text):
    words = text.lower().split()
    words = [lemmatizer.lemmatize(w) for w in words if w not in custom_stopwords and w.isalpha()]
    return " ".join(words)

def load_documents_from_folder(folder_path):
    docs, filenames = [], []
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".txt"):
            full_path = os.path.join(folder_path, filename)
            with open(full_path, "r", encoding="utf-8", errors="replace") as f:
                text = f.read().strip()
                if text:
                    docs.append(preprocess(text))
                    filenames.append(filename)
    return docs, filenames
    
def show_sample_documents(docs, filenames, labels):
    df = pd.DataFrame({"Filename": filenames, "Text": docs, "Cluster": labels})
    for cluster_id in sorted(df["Cluster"].unique()):
        if cluster_id == -1:
            continue
        print(f"\nCluster {cluster_id} sample documents:")
        sample = df[df["Cluster"] == cluster_id].sample(n=min(3, len(df[df["Cluster"] == cluster_id])), random_state=42)
        for _, row in sample.iterrows():
            print(f"- {row['Filename']} | {row['Text'][:200]}...")

def compute_cluster_similarities(embeddings, labels):
    df = pd.DataFrame({"label": labels})
    cluster_means = {}
    for label in df["label"].unique():
        if label == -1:
            continue
        cluster_means[label] = np.mean(embeddings[labels == label], axis=0)
    keys = sorted(cluster_means.keys())
    matrix = cosine_similarity([cluster_means[k] for k in keys])
    sim_df = pd.DataFrame(matrix, index=keys, columns=keys)
    print("\nInter-cluster cosine similarity matrix:")
    print(sim_df.round(2))

def get_top_terms_per_cluster(docs, labels, num_terms=10):
    df = pd.DataFrame({"doc": docs, "cluster": labels})
    cluster_terms = {}
    vectorizer = TfidfVectorizer(stop_words="english", max_features=1000)
    for cluster_id in set(labels):
        if cluster_id == -1:  
            continue
        cluster_docs = df[df["cluster"] == cluster_id]["doc"].tolist()
        X = vectorizer.fit_transform(cluster_docs)
        terms = vectorizer.get_feature_names_out()
        top_indices = X.sum(axis=0).A1.argsort()[::-1][:num_terms]
        top_words = [terms[i] for i in top_indices]
        cluster_terms[cluster_id] = top_words
    return cluster_terms

if __name__ == "__main__":
    folder = r"C:\Users\joeva\Downloads\ai_gov\data\processed"
    docs, filenames = load_documents_from_folder(folder)

    if not docs:
        print(f"No documents found in {folder}")
        exit(1)

    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(docs, show_progress_bar=True)

    reducer = umap.UMAP(n_neighbors=15, n_components=2, min_dist=0.3, metric='cosine', random_state=42)
    reduced_embeddings = reducer.fit_transform(embeddings)

    clusterer = hdbscan.HDBSCAN(min_cluster_size=5, metric='euclidean', prediction_data=True)
    cluster_labels = clusterer.fit_predict(reduced_embeddings)

    cluster_terms = get_top_terms_per_cluster(docs, cluster_labels)
    for cid, words in cluster_terms.items():
        print(f"Cluster {cid}: {', '.join(words)}")

    show_sample_documents(docs, filenames, cluster_labels)

    compute_cluster_similarities(embeddings, cluster_labels)

    df = pd.DataFrame({
        "Filename": filenames,
        "Cluster": cluster_labels
    })
    df.to_csv("huggingface_cluster_assignments.csv", index=False)

    plt.figure(figsize=(10, 6))
    scatter = plt.scatter(reduced_embeddings[:, 0], reduced_embeddings[:, 1], c=cluster_labels, cmap='tab10')
    plt.colorbar(scatter)
    plt.title("UMAP Projection of Document Clusters")
    plt.tight_layout()
    plt.savefig("huggingface_umap_plot.png")
    plt.show()