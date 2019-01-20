function r() {    
 var num1 = document.getElementById("num1").value;

 var num2 = document.getElementById("num2").value;
 if ( (num1==50)|| (num2==50) ||((num1+num2)==50)) {
      document.getElementById('true').innerHTML='True'
      console.log('true')
 } else{
     document.getElementById('false').innerHTML='False'
    console.log('false')

}
}
  

