//
$(document).ready(function(){

    $("#btn").click(function(){
      var box = $("#box");
      startAnimation();
      function startAnimation(){
      var random1 = Math.floor(Math.random()*500);
      var randomFont = Math.floor(Math.random()*600)
      var random2 = Math.floor(Math.random()*400);
      box.animate({top:random1});
      box.animate({width:random2});
      box.animate({height:random1});
      //box.animate({color:"orange"});
      box.animate({fontSize:randomFont},startAnimation)
    
    }
    });
    $(document).ready(function(){
        $("#stop").click(function(){
            $("#box").clearQueue();
        })
    })


})