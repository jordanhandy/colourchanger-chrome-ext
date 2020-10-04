// send a message with the key of "todo" to show
// the extension as being active
chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "changeColor")
    {
        var addColor = "#" + request.clickedColor;
        $('.api').css('color',addColor);
    }
});