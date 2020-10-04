// send a message with the key of "todo" to show
// the extension as being active
chrome.runtime.sendMessage({todo: "showPageAction"});