//2. Write a JavaScript function to clone an array.

function copyArray(input){
   
   let emptyArray = [];
   let newArray = input.concat(emptyArray);
   console.log(newArray);
}

//using slice

function sliceCopy(input){

     let newSliceArray= input.slice(0);
     console.log(newSliceArray);
}


copyArray([1,2,3,4,5,6]);
sliceCopy([1,2,3,4,34]);