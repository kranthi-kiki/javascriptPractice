//using jQuery effects fadeIn;fadeOut;

$(document).ready(function(){
    $("h1").click(function(){
        $("h1").fadeOut();

    })
})
$(document).ready(function(){
    $("#show").click(function(){
        $("h1").fadeIn();
        $("p").fadeTo("slow",0.2);
    })
})