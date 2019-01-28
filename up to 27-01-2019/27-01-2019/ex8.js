//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function primeNumber(number) {
    if (number == 0 || number == 1) return false;
    let root = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= root; i++) {
        //console.log(number%i);
        if (number % i == 0) {
           
            return false;
        }
    }
    return true;
}
console.log(primeNumber(123));    
//