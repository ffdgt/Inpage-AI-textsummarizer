document.addEventListener("DOMContentLoaded", () => {
  const apiKeyInput = document.getElementById("apiKey");
  const saveBtn = document.getElementById("saveBtn");
  const status = document.getElementById("status");

  chrome.storage.sync.get(["huggingfaceApiKey"], (result) => {
    if (result.huggingfaceApiKey) {
      apiKeyInput.value = result.huggingfaceApiKey;
    }
  });

  saveBtn.addEventListener("click", () => {
    const apiKey = apiKeyInput.value;
    chrome.storage.sync.set({ huggingfaceApiKey: apiKey }, () => {
      status.textContent = "Settings saved!";
      setTimeout(() => {
        status.textContent = "";
      }, 2000);
    });
  });
});