//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };
console.log(student)
delete student.rollno;

console.log(student)

//size of object;

Object.keys(student).length

console.log(Object.keys(student).length)

//

Object.size = function (object){
   let size =0, key;
   for(key in object){
       if (object.hasOwnProperty(key)){
           size++
       }
   }
   return size;

}
var size = Object.size({
    name : "David Rayy", 
    sclass : "VI", 
    rollno :''})

    console.log(size);