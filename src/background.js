
chrome.contextMenus.create({
  title: 'Make "%s" ａｅｓｔｈｅｔｉｃ', 
  contexts:['selection'], 
  onclick: function onclick(info, tab) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    },
    function sendMsg(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        cmd: 'aesthesize'
      });
    });
  }
});
