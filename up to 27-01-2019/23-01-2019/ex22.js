//22. Write a JavaScript program to compute the union of two arrays

var array1=[1,2,3,4,5];

var array2=[4,5,6,7,8,9];

var arrayConcat = array1.concat(array2);
//console.log(arrayConcat);

var newArray =[];
for(var i=0;i<arrayConcat.length;i++){
      if(newArray.indexOf(arrayConcat[i])==-1){
          newArray.push(arrayConcat[i]);
      }

}
console.log(newArray);