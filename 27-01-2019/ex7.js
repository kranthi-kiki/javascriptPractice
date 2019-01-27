// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
 function vowelsCount(str){
    let count =0;
    let vowels = "aeiouAEIOU";
    for (i=0;i<str.length;i++){

        if(vowels.indexOf(str[i])!==-1){
            count++
        }
    }
    return count;
 }
 console.log(vowelsCount(' kiki'))