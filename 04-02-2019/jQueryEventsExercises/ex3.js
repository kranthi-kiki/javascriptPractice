$(document).ready(function(){
   // $("#field1").focus();
    $("#field1").blur(function(){
        var pElement = $("<p></p>").text("Input field is changed");
        $("div").append(pElement);

    })
})