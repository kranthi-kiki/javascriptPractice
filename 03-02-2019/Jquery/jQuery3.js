// jQuery effects
// hide and show
$(document).ready(function(){
    $("h2").dblclick(function(){
        $(this).hide();
    });
    $("#show").click(function(){
        $("p").show();
        $("h2").show();
    })
})