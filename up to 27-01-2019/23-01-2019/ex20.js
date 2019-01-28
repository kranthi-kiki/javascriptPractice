//20. Write a JavaScript program to find duplicate values in a JavaScript array.



var array = [3,2,1,2,2,3,35,6,5,4,4,4]
var sortedArray = array.sort(function(a, b){return a - b});
//console.log(sortedArray);
var newArray =[];

for (var i=0;i<sortedArray.length;i++){

      if(sortedArray[i+1]==sortedArray[i]){
           newArray.push(sortedArray[i]);

      }
}

console.log(newArray);
