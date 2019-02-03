// using double click method;
$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    }) 
})

//on mouseenter 

$(document).ready(function(){
  $("h1").mouseenter(function(){
      //alert('welcome to BookStore');
      $(this).css("color","orange")
  })

});
// hover

$(document).ready(function(){
    $("h2").hover(function(){
        $(this).css("color", "lightblue");

        //alert(" h2")
    })
})