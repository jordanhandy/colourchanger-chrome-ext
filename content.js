// send a message with the key of "todo" to show
// the extension as being active
chrome.runtime.sendMessage({todo: "showPageAction"});

// listen for a message from the Popup.js
// if the request comes in to "ChangeColor"
// append a # sign to the color, so that it is valid hex
// change the "API" class of the webpage to the newly selected color
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "changeColor")
    {
        var addColor = "#" + request.clickedColor;
        $('.intro').css('color',addColor);
    }
});