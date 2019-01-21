//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function array(input,n){
    if (input==null){
        return `Not an array`;
    }
    if(n==null){
        return input[input.length-1];
    }
     if (n<0){
        let a= Math.abs(n);
        return input.slice(0,a)
    }
    
    
    return input.slice(Math.max((input.length-n),0));

    }

    console.log(array([1,2,3,4],-2));