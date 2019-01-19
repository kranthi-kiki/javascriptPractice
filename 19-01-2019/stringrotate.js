
function rotate(){
    var input= document.getElementById("input").value;

 setInterval(function(){

    input= input[input.length-1]+ input.slice(0,input.length-1);
   document.getElementById('result').innerHTML= input+"";
   //console.log(input)
 },100)
 
}


