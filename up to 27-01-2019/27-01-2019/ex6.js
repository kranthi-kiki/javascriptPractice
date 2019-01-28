//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longstrig(str){
    let array = str.match(/\w[a-z]{0,}/gi);

    let newArray =     array[0];
    for (var i=1;i<array.length;i++){
          if(newArray.length<array[i].length){
              newArray=array[i];
          }
    }
    return newArray;
}

console.log(longstrig(' hi this is kranthi'))