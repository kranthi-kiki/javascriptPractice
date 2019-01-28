// converting object to string and storing in local storage

var student = {
    name: 'kiki',
    age:20,
    Dob:'24SEP'

}

const stdObjToString = JSON.stringify(  student);
console.log( typeof stdObjToString);
localStorage.setItem('local',stdObjToString) 

const objFormat = JSON.parse(stdObjToString)

console.log(objFormat.age)