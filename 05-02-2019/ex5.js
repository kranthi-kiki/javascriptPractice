// Ex-5
$(document).ready(function(){
    $("p").dblclick(function(){
        $("p").css({"background-color":"yellow","font-size": "200%"})
    });
    $("h4").dblclick(function(){
        //$("p").toggleClass("lable")
        $("h4").toggleClass("main");
    });
    $("body").delegate("h3","click",function(){
       // alert("h3");
      
       $(this).after("<h3> Another head h3</h3>")
        //$("<h3> Another H3</h3>").insertAfter("h3")
    })
})