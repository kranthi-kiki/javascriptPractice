//26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
var array=[10,30,50,40,50,60,70,20,40];
var newArray=[]

 for(var i=0;i<array.length;i++){

     for(var j=i;j<array.length;j++){

        if (array[i]+array[j]===50){
               
          newArray.push(array[i]);
             //console.log(array[i]);
           newArray.push(array[j]);
             //console.log(array[j]);
             console.log(array[j])
            
        }
    //    console.log(array[i])
     }
    
     
 }
 console.log(newArray);