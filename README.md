# Inpage-AI-textsummarizer

In-Page One-Click AI Summariser: In-Page One-Click AI Summariser is a browser-integrated Python application that generates instant summaries of highlighted text on any webpage.
It uses the Hugging Face Transformers Inference API with the `sshleifer/distilbart-cnn-12-6` model to produce concise, human-readable summaries in a single click.

---

## 🚀 Features

* **One-Click Summarization** — Select any text on a webpage and instantly get a short, clear summary.
* **Real-Time AI Processing** — Powered by Hugging Face’s `distilbart-cnn-12-6` summarization model.
* **Lightweight Integration** — Works directly in the browser with minimal setup.
* **Python-Based Backend** — Handles API requests and serves summaries quickly.
* **User-Friendly UI** — No extra steps — highlight, click, read.

---

## 🛠️ Tech Stack

* **Language:** Python 3.x
* **API:** Hugging Face Inference API
* **Model:** `sshleifer/distilbart-cnn-12-6`
* **Browser Integration:** JavaScript + HTML content script
* **Backend Framework:** Flask (or any Python server library you used — adjust if needed)

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone [https://github.com/ffdgt/inpage-ai-summariser.git](https://github.com/ffdgt/inpage-ai-summariser.git)
cd inpage-ai-summariser

### 2. Create virtual Environment
```bash
python -m venv venv

