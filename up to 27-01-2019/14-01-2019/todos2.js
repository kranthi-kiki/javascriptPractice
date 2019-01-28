// using this 

let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone: 0,
    addMeetings: function(num){
        this.meetings =this.meetings+num
    },
    meetingsdone: function(meet=0){
    this.meetingsDone = this.meetingsDone+ meet
    },
    resetDay: function(){
       this.meetings=0,
       this.meetingsDone=0
    },
    summary: function(){
       let  meetingsLeft = this.meetings-this.meetingsDone
        return `you have ${meetingsLeft} meetings today`
    }
}

myTodos.addMeetings(10)
myTodos.meetingsdone(3)
console.log(myTodos.summary())
