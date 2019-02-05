//Ex-7 jQuery Code to get a single element from a selection.

$(document).ready(function(){
    $("button").click(function(){
       // alert("h2")
        alert($("li:first").text())
    })
})