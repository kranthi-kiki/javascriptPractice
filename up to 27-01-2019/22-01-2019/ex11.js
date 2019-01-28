//11. Write a JavaScript program to find the sum of squares of a numeric vector.
function sumOfSqures(array){
 
  var i=0;
  var sum=0;
  for(i=0;i<array.length;i++){

    sum+= array[i]*array[i];
  } 
  console.log(sum)
}
sumOfSqures([1,2,3,4,5])