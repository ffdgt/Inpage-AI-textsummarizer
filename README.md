# Inpage-AI-textsummarizer
In-Page One-Click AI Summariser: In-Page One-Click AI Summariser is a browser-integrated Python application that generates instant summaries of highlighted text on any webpage.
It uses the Hugging Face Transformers Inference API with the sshleifer/distilbart-cnn-12-6 model to produce concise, human-readable summaries in a single click.

# Features
 One-Click Summarization — Select any text on a webpage and instantly get a short, clear summary.  
 Real-Time AI Processing — Powered by Hugging Face’s distilbart-cnn-12-6 summarization model.
 Lightweight Integration — Works directly in the browser with minimal setup.
 Python-Based Backend — Handles API requests and serves summaries quickly.
 User-Friendly UI — No extra steps — highlight, click, read.

# Tech Stack
Language: Python 3.x
API: Hugging Face Inference API
Model: sshleifer/distilbart-cnn-12-6
Browser Integration: JavaScript + HTML content script
Backend Framework: Flask (or any Python server library you used — adjust if needed)

# Installation
Clone the Repository

git clone https://github.com/ffdgt/inpage-ai-summariser.git
cd inpage-ai-summariser

Create a Virtual Environment
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows

Install Dependencies
pip install -r requirements.txt

Set Up Hugging Face API Key
 Create an account at Hugging Face
 Get your API token from your account settings.
Create a .env file in the project root:
HUGGINGFACE_API_KEY=your_api_key_here

Usage
Run the app.py
python app.py

This will start the summarization server.
Load the Browser Extension
Open your browser’s Extensions page (e.g., chrome://extensions/).
Enable Developer Mode.
Click Load Unpacked and select the extension/ folder from this repo.
Highlight and Summarise
Go to any webpage.
Highlight a sentence or paragraph.
Click the summariser icon — your summary will appear instantly.
