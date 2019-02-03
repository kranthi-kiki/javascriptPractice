//using jQuery

//on event
$(document).ready(function(){
    $("p").on({ mouseenter: function(){ $(this).css("background-color", "gray");},
    mouseleave: function(){$(this).css("color","yellow");},
   click:function(){$(this).css("color", "lightblue")},
   
    })
})
//