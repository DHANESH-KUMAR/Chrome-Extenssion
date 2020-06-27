if (!chrome.runtime) {
  chrome.runtime = chrome.extension;
}

chrome.runtime.sendMessage({ todo: "showPageAction" });
chrome.storage.sync.get("imageLink", function (customBackground) {
  if (customBackground.imageLink) {
    // $("body").css({ "background-image": "url(" + customBackground + ")" });
    document.body.style.backgroundImage = "url(" + customBackground + ")";
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendMessage) {
  if (request.todo == "changeBg") {
    var _link = request.imageLink;
    chrome.storage.sync.set({ imageLink: _link }, function () {
      $("body").css({ "background-image": "url(" + _link + ")" });
    });
  }
});
