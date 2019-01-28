//2. Write a JavaScript function that checks whether a passed string is palindrome or not?

var string1 = 'Kik';

var string2 = string1.split('').reverse().join('');

if (string1==string2){
    return   console.log(`Given string is a palindrome`);
}

console.log(string2);

// using regular expression;

function str(input){
    let RE= /[\W_]/g;///[\W_]/g
    let lowerCaseInput = input.toLowerCase().replace(RE,"");
    console.log(lowerCaseInput)
    let reverseInput = lowerCaseInput.split('').reverse().join('');
    console.log(reverseInput)
     if (reverseInput==lowerCaseInput){
         return console.log(`Given string is a palindrome`);
     }else{
         return console.log(`Given string is not a Paindrome`);
     }
}

str(' A man, a plan, a canal. Panama');