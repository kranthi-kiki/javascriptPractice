//9. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays

// var array1=[1,2,3,4,5];
// var array2=[6,7,8,9,10];
// var newArray=[];

function sumOfTwoArray(array1,array2){

    var newArray = [];
    var index=0;
    var x;
    if (array1.length==0)
         return array2;
    if (array2.length==0)
        return array1;
    while(index < array1.length && index < array2.length){

        newArray.push(array1[index]+array2[index]); 
        index++;
    }
    if(index==array1.length){
        for(x=index;x<array2.length;x++){
            newArray.push(array2[x]);
        }
    }else{
        for(x=index;x<array1.length;x++){
          newArray.push(array1[x]);
        }
    }

    return newArray;
}
sumOfTwoArray([1,2,3,4,5,6],[6,7,8,9,0])
console.log(sumOfTwoArray([1,2,3,4,5,6],[6,7,8,9,0]))

