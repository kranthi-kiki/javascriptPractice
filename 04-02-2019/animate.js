//using animate

$(document).ready(function(){
    /////////////
    $("#animate").click(function(){
        $("#animate").animate({left: '20px',
        width: '50%',
        height:'50%',
    fontSize:'5em'},5000)
    })
     ///////////
    $("#body").click(function(){
        var div = $("div");
        div.animate($("div").css("color", "blue"));
        var animate = $("#animate");
        animate.animate({height: '300px', opacity: '0.4'}, "slow");
       
    })
    //////////////
    $("#stop").click(function(){
        $("#animate").stop();
    })
   
})

