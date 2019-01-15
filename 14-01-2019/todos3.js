let myTodos= ['learn html','learn javascript','learn c#'];

const todosFollowup = [{
    title:'learn javascript',
    isDone:false,
},{
    title:'leran c#',
    isDone: false,
},
{
    title: 'learn html',
    isDone: true,
},] 

// let index = todosFollowup.findIndex(function(todo,index){
//     console.log(todo);
//  return todo.title === 'learn html'

// })

// console.log(index);

const findTodo = function(array,title){
  const index = array.findIndex(function(todo,index){
      return todo.title.toLowerCase() === title.toLowerCase() 

  })
  return array[index]
}

let printTodo = findTodo(todosFollowup,'learn javascript');
console.log(printTodo);










