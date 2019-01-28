//17. Write a JavaScript program to shuffle an array.

function array(input){


 var index;
 var l= input.length;
 while(l>0){
   index = Math.floor(Math.random()*l);
  
    l--;
    let temp= input[l];
    input[l]= input[index];
    input[index]= temp;
 }

  return input;
 
}

console.log( array([1,2,3,4,5,6]));