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