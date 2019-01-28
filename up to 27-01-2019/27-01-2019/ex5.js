//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function upperString(input){
  
    let array= input.split(' ');
   // console.log(array);
    let newArray = [];

 for(var i=0;i<array.length;i++){
  
     newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    // console.log(newArray);
 }
    
return newArray.join(' ');
}

console.log(upperString(' hi my name is kiki and i am soo cute'))