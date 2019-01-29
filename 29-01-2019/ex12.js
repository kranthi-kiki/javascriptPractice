
document.getElementById('highlight').onmouseover = function(){highlight()}
document.getElementById('highlight').onmouseout = function(){normal()}

function highlight (){

   // document.getElementById('highlight').style.color ='red'
   var bold = document.getElementsByTagName('b')
  // console.log(bold)
   for(let i=0;i<bold.length;i++){

      bold[i].style.color= 'red'
   }

}
function normal(){
    var bold = document.getElementsByTagName('b')
  // console.log(bold)
   for(let i=0;i<bold.length;i++){

      bold[i].style.color= 'black'

   }
}