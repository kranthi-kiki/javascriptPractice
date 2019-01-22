//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

var array=[1,1,2,3,3,3,5,5,4,4,4,5,5,6,6,6];

// using set method
            //    var newArray = [new Set(array)];
            //    console.log(newArray);


// using indexOf

var newArray =[];
for(var i=0;i<array.length;i++){
      if(newArray.indexOf(array[i])==-1){
          newArray.push(array[i]);
      }

}
console.log(newArray);



// for(var i=0;i<array.length;i++){

//         for(var j=i;j<array.length;j++){
//             if(array[i]==array[j]){
                 
//                     array.splice(array.indexOf,1);
//                      }//console.log(array[i]);
//         }
// }
 
// console.log(array);


