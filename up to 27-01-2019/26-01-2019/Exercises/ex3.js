// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'

function orderdString(input){

    let newString = input.split('').sort().join('');
    return console.log(newString);
}

orderdString('keerthana')