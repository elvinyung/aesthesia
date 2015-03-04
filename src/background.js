
chrome.contextMenus.create({
  title: 'Make "%s" ａｅｓｔｈｅｔｉｃ', 
  contexts:['editable'], 
  onclick: function(info, tab) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    },
    function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        cmd: 'aesthesize'
      });
    });
  }
});
