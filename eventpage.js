debugger;
if (!chrome.runtime) {
  chrome.runtime = chrome.extension;
}
chrome.runtime.onMessage.addListener(function (message, sender, reply) {
  if (message.todo == "showPageAction") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.show(tabs[0].id);
    });
  }
});
