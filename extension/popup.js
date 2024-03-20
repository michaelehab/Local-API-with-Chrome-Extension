document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("click", function () {
    const inputField = document.getElementById("inputField");
    const userInput = inputField.value;
    chrome.runtime.sendMessage(
      { contentScriptQuery: "fetchData", text: userInput },
      (response) => {
        document.getElementById("apiResponse").textContent = response;
      }
    );
  });
});
