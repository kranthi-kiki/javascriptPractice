$(document).ready(function(){
    $("#btn1").click(function(){
        
        $("#box").animate({
            top:"100px",
        
        // left:"250px",
        // height:"50px",
        // width:"50px",
    })
})
$("#btn2").click(function(){
    $("#box").animate({
        // left:"0px",
        // height:"150px",
        // width:"150px"
        top:"0px"
    })
});

$("#btn3").click(function(){
    var box2 = $("#box2");
    starAnimation();
    function starAnimation(){
       var topLen1= Math.floor(Math.random()*400);
       var topLen2= Math.floor(Math.random()*400);

      // console.log(topLen1);
       box2.animate({height:topLen1});
       box2.animate({width:topLen2})
        box2.animate({ top:topLen1});
       
        box2.animate({ top:topLen2},"slow",starAnimation);
    }
})
})
