chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "summarize" && info.selectionText) {
    const inputText = info.selectionText;

    fetch("http://127.0.0.1:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: inputText })
    })
    .then((res) => res.json())
    .then((data) => {
      chrome.tabs.sendMessage(tab.id, {
        action: "showTooltip",
        text: data.summary || "⚠️ No summary returned."
      });
    })
    .catch((err) => {
      chrome.tabs.sendMessage(tab.id, {
        action: "showTooltip",
        text: "❌ API error: " + err.message
      });
    });
  }
});
