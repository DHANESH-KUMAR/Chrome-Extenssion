var btnPopup = document.getElementById("btnPopup");

btnPopup.addEventListener("click", function (evt) {
  var _val = $("#txtSource").val();
  chrome.tabs.query({ active: true, currentWindow: true }, function (tables) {
    chrome.tabs.sendMessage(tabs[0].id, { todo: "changeBg", imageLink: _val });
  });
});
