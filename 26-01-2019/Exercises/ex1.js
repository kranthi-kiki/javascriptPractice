//Write a JavaScript function that reverse a number.

function reverse(num){
 num= num+'';
 return num.split('').reverse().join('');



}

console.log(reverse(23456))