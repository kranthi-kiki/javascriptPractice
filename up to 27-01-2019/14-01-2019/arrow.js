// using arrow 

let myTodos= ['learn html','learn javascript','learn c#','learn nativescript','learn angular','learn DB'];

const todosFollowup = [{
    title:'learn javascript',
    isDone:true,
},{
    title:'leran c#',
    isDone: true,
},
{
    title: 'learn html',
    isDone: true,
},
{
    title: 'learn nativescript',
    isDone: false,
},
{
    title: 'learn angular',
    isDone: false,
},
{
    title: 'learn DB',
    isDone: false,
},] 


// const todosDone = todosFollowup.filter (function(todo){
//     return todo.isDone === true;
// }  )

// console.log(todosDone)

// using arrow

const todosDone = todosFollowup.filter((todo) => todo.isDone===true)

//console.log(todosDone)

todosDone.forEach((workDone)=>{
    console.log(` things done are  ${workDone.title}`)
})

// todosDone.forEach(function (workDone,){
//     console.log(` things done are  ${workDone.title}`)
// })


// [ { title: 'learn javascript', isDone: true },
//   { title: 'leran c#', isDone: true },
//   { title: 'learn html', isDone: true } ]



    










