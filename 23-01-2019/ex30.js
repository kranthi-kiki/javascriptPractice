//30. Write a JavaScript function to merge two arrays and removes all duplicates elements.

function arrayMerge(array1,array2){
//    var arrayConcat = array1.concat(array2);
//    var newArray=[];
//    for(var i=0;i<arrayConcat.length;i++ ){

//        if(newArray.indexOf(arrayConcat[i]==-1)){

//            newArray.push(arrayConcat[i]);
//        }
//  return newArray;  }
// 
// // console.log(newArray);

var arrayConcat = array1.concat(array2);
//console.log(arrayConcat);

var newArray =[];
for(var i=0;i<arrayConcat.length;i++){
      if(newArray.indexOf(arrayConcat[i])==-1){
          newArray.push(arrayConcat[i]);
      }

}
console.log(newArray);
}

 arrayMerge([1,2,3,4,5,6,7],[4,5,6,7,8,9]);