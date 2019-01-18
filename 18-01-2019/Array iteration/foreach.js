var numbers = [1,2,3,4,5,6,7]

//foreach
 numbers.forEach((number)=>{ console.log(`INDEX  number= ${number}`) })

 // map method

var numberTwo= numbers.map((number)=> console.log( number*2))

//filter 

var evenNumber = numbers.filter((number)=>{ return ((number%2)==0) }) //

//console.log(evenNumber)

