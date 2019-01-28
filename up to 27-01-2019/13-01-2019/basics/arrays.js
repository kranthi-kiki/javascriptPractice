//changing the array element by using shift,unshift,pop,push

const numbers = ['one', 'two','three','four','five','six'];

// numbers.shift()
// //printing deleted element
// console.log(numbers.shift())
// console.log(numbers);

// numbers.unshift('newnumber')

// console.log(numbers)

// numbers.pop();
// console.log(numbers.pop());
// console.log(numbers);

// numbers.push('lastnumber');
// console.log(numbers);

numbers.splice(2,1,'deletednumber');
console.log(numbers);