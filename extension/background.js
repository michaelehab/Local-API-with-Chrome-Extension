chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.contentScriptQuery === "fetchData") {
    const userText = request.text; // Get the text from the popup
    fetch(`http://localhost:8000/api/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userText }), // send the user input to the server
    })
      .then((response) => response.text())
      .then((text) => sendResponse(text))
      .catch((error) => console.error("Error:", error));
    return true; // Will respond asynchronously.
  }
});
