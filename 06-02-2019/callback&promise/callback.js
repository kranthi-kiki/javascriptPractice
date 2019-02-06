$(document).ready(function(){
    $("#box1").click(function(){
        box();
        function box(callback){
            var random = Math.floor( Math.random()*200);
            $("#box1").animate({top:random});
            setInterval(function(){
            box2();
            console.log(" in time interval")
            },2000)
            $("#box2").animate({top:-random},box);
        }
       
    })
})

function box2(){
   var box1=$("#box1");
   var box2 = $("#box2");
   var random = Math.floor( Math.random()*200);
   box1.animate({
    left: random,
    opacity: '0.5',
    height: random,
    width: random,

   });
   box2.animate({
    right: random,
    opacity: '0.5',
    height: random,
    width: random,

   })

}