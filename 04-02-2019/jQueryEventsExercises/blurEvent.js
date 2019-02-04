// blur event
$(document).ready(function(){
    $("#field1").focus(function(){
        $(this).css("background-color","yellow")
   
    });
    $("#field1").blur(function(){
        $(this).css("background-color","black")
       
    })
})