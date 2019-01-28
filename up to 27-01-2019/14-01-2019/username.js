let userName = 'name123';
let password = '12345';

let userCheck = function(input){
    if ((input.includes(123)) && (input.length>6)){
         return true
    }else{
        return false;
    }

}

let passCheck = function(pass){
    if ((pass.includes(123)) && (pass.length>8)){
        return true
   }else{
       return false;
   } 
}
console.log(passCheck(password));

console.log(userCheck(userName));

