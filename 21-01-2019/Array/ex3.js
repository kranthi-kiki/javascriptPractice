//Write a JavaScript function to get the first element of an array. Passing a parameter
// 'n' will return the first 'n' elements of the array.


function array(input,n){
   
    if (input==null){
        return `Not an array`;
    }
    if(n==null){
        return input[0];
    }
    if (n<0) 
         return [];
    return input.slice(0,n)

    }


    console.log(array([1,2,3,4,5,6],1));

 

