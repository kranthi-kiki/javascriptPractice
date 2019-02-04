//click and dpuble click;

$(document).ready(function(){
    $("p").click(function(){
        $("p").append("<p>This is a click Event<\p>")
    });
    $("h1").dblclick(function(){
        $("h1").append("<p>This is a double-click Event<\p>");
    })
})