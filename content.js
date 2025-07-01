chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showTooltip") {
    // Remove existing tooltip if any
    document.querySelectorAll(".ai-summary-tooltip").forEach(el => el.remove());

    const tooltip = document.createElement("div");
    tooltip.className = "ai-summary-tooltip";
    tooltip.innerText = message.text;
    Object.assign(tooltip.style, {
      position: "fixed",
      top: "10px",
      left: "10px",
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
      zIndex: 9999,
      maxWidth: "300px",
      borderRadius: "5px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      opacity: "0",
      transition: "opacity 0.5s ease-in-out"
    });
    document.body.appendChild(tooltip);
    requestAnimationFrame(() => {
      tooltip.style.opacity = "1";
    });
    setTimeout(() => tooltip.remove(), 10000);
  }
});
console.log("✅ content.js is running!");