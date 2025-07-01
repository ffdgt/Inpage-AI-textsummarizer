from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
HUGGINGFACE_API_TOKEN = os.getenv("HUGGINGFACE_API_TOKEN")
API_URL = "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6"
HEADERS = {
    "Authorization": f"Bearer {HUGGINGFACE_API_TOKEN}",
    "Content-Type": "application/json"
}

@app.route("/")
def index():
    return "AI Summarization Server is running."

@app.route("/summarize", methods=["POST"])
def summarize_text():
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"error": "Missing 'text' field in request body"}), 400

    input_text = data["text"]
    try:
        response = requests.post(API_URL, headers=HEADERS, json={"inputs": input_text})
        if response.status_code == 200:
            result = response.json()
            summary = result[0]["summary_text"]
            return jsonify({"summary": summary})
        else:
            return jsonify({"error": "API failed", "details": response.json()}), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
