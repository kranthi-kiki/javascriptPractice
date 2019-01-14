// let myMultiplier = function(num1,num2) {
//     return num1*num2
// }

// console.log(myMultiplier(5,5))

// defining default parameters in a function

let myMultiplier =  function(num1 ='noNumber', num2='noNumber'){

    return  `product of ${num1} x ${num2} = ${num1*num2} `
}

console.log(myMultiplier(5,5))