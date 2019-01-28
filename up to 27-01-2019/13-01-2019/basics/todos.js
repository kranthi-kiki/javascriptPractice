// using for loop and forEach loop

const myTodos=[];

myTodos.push('learn javascript');
myTodos.push('learn nativescript')
myTodos.push( 'learn Angular')
myTodos.push('learn html & css')
myTodos.push('develop a application')

// myTodos.forEach( function(todo,index){
//     console.log(`thing ${index+1}: ${todo}`);

// })

for(i=0; i<myTodos.length;i++ ){
    console.log(`thing ${i+1} : ${myTodos[i]}`)
}