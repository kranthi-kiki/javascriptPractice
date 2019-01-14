//writting a function that takes a object and return object 
// using example : changing price
let newCourseOne = {
    title: 'javascript',
    author: ' Hitesh',
    discription: 'this video has designed to teach javascript to beginners from basic to advance level',
    price: 1500,
    
}

let newCourseTwo = {
    title: 'html',
    author: ' Hitesh',
    discription: 'this video has designed to teach javascript to beginners from basic to advance level',
    price: 1000,
    
}

let newPrice= function(object){
   return {
       newPriceOne: `new price of course is ${ object.price+ 500} `,
       newPriceTwo: `new price of course is ${ object.price+ 1000} `,

   }
}

let  newPrices= newPrice(newCourseOne);

console.log(newPrices.newPriceTwo);

