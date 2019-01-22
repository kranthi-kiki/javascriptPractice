//12. Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProducts(array){
 
    var i=0;
    var sum=0;
    var product =1;
    for(i=0;i<array.length;i++){
  
      sum+= array[i];
      product*= array[i]
    } 
    console.log(`sum= ${sum} and product =${product}`)
  }
  sumAndProducts([1,2,3,4,5])