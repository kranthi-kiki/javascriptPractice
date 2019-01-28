let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone: 0,
}

let addMeetings = function(todo,meet=0){
    todo.meetings=todo.meetings + meet 
}

let meetingsDone = function(todo,meet=0){
 todo.meetingsDone = todo.meetingsDone + meet
}

let resetDay = function(todo){
    todo.meetings=0
    todo.meetingsDone=0
}
let summaryOfDay = function(todo){
    let meetingsLeft= todo.meetings -todo.meetingsDone
    return ` you have ${meetingsLeft} meetings today`
}
 addMeetings(myTodos,5)
 meetingsDone(myTodos,3)
 console.log(summaryOfDay(myTodos))
 

