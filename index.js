$(document).ready(function(){
    $("#aboutButton").click(function(){
        var elmnt = document.getElementById('aboutDiv');
        elmnt.scrollIntoView(false);
    });
    $("#contactButton").click(function(){
        var elmnt = document.getElementById('contactDiv');
        elmnt.scrollIntoView();
    });
});