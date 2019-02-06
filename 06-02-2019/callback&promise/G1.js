$(document).ready(function(){

$("button").click(function(){
   // alert("con")
   var r1 =Math.floor(Math.random()*500);
   var r2 =Math.floor(Math.random()*500)

   down();
   function down(callback){
       console.log("down1")
    $("#b1").animate({top:r1});
    $("#b3").animate({top:r2});
    $("#b5").animate({top:r1});
    $("#b7").animate({top:r2});
    $("#b9").animate({top:r2} ,down);
   
    
    
   };
   setInterval(function(){
       top();
      
      // console.log("interval")

   },1000);
  
   function top(){
    $("#b2").animate({top:r1});
    $("#b4").animate({top:r2});
    $("#b6").animate({top:r1});
    $("#b8").animate({top:r2});
    $("#b10").animate({top:r1},down);

   }

})

})