// listen for the "todo" key.
// If the "todo" is received, then show the extension active on the current
// tab.

// The manifest file defines the URL matching needed, for the content
// scripts to be able to send this message
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});

