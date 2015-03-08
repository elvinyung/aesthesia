
var convertChar = function convertChar(c) {
  // should only support converting characters between 33(!) and 126(~)
  var cn = c.charCodeAt(0);
  return String.fromCharCode((cn >= 33 && cn <= 126) ? cn + 65248 : cn);
};

var aesthesize = function aesthesize() {
  var node = document.activeElement;
  var original = node.value;
  var before = original.substring(0, node.selectionStart);
  var replace = original.substring(node.selectionStart, node.selectionEnd)
    .split('').map(convertChar).join('');
  var after = original.substring(node.selectionEnd, original.length);
  node.value = before + replace + after;
};

chrome.extension.onMessage.addListener(function onMsg(message, sender, callback) {
  (message.cmd == "aesthesize") && aesthesize();
});
