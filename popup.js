
// Assign the chosen color to the colorValue variable,
// whether it is manually typed, clicked, or pasted in

// when the button is selected, change the value of the items
// in the currently active window, and send the "changeColor"
// message to the content script in "content.js"

$(function(){
    var colorValue = $('#fontColor').val();
    $('#fontColor').on("change paste keyup", function(){
        colorValue = $(this).val();
    });
    $('#btnChange').click(function(){
        chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{todo: "changeColor", clickedColor: colorValue})
        });
    });
});