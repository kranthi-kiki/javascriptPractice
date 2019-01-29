function validate(){
let letters = /^[A-Za-z]+$/;
let input = document.getElementsByTagName('input')

if(input[0].value.match(letters)){
    alert('your data submited')
}else{
    alert('please enter letters Only')
}
let numbers = /^[0-9]+$/
if(input[3].value.match(numbers)){
    alert('your data is submited')
}else{
    alert ('please enter numbers Only')
}


}
// console.log(document.getElementsByTagName('input'))
// console.log(document.getElementsByTagName('input[1]'))
// let firstName = document.getElementById('firstname')
// console.log(document.getElementsByTagName('input'))
// console.log(document.getElementById('firstName'))