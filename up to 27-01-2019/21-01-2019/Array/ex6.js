// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function evenNumber(){
var num = document.getElementById('input').value;
console.log(num);
var number = num.toString()
//console.log( number.length)
var result = [number[0]];
//console.log(result);
var i;
for(i=0;i<number.length;i++){
    if ( ( number[i]%2 )+( ( number[i-1]%2 ) ) ==0 ){
         
        console.log(number[i]);
        console.log(number[i-1])
        result.push('-');
       // result.splice(i,0,'-');
        console.log(result)
    }
    result.push(number[i])
   }
   document.getElementById('output').innerHTML=result;
   //console.log(result);
}








