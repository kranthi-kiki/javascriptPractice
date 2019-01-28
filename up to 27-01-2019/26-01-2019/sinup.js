document.querySelector('.sinup').addEventListener('submit',(event)=>
{
    let firstName;
    let lastName;
    let email;
    let password;
    let passtwo;

event.preventDefault();
 console.log(event.target.firstname.value);
  firstName = event.target.firstname.value;
localStorage.setItem('firstName',firstName);
lastName = event.target.lastname.value;
localStorage.setItem('lastName',lastName);
email = event.target.email.value;
localStorage.setItem('email',email);
password = event.target.password.value;
localStorage.setItem('password',password);
passtwo = event.target.passwordTwo.value;

if(password!=passtwo){
    alert(' Password do not match please renter password')
    event.target.password.value='';
    event.target.passwordTwo.value='';
}
event.target.firstname.value='';
event.target.lastname.value='';
event.target.email.value='';
event.target.password.value='';
event.target.passwordTwo.value='';
})














// document.querySelector('.sinup').addEventListener('submit',(event)=>{
    
//     event.preventDefault();
//     // let fullName= event.target.fullname.value;
//     console.log(fullName);
//     console.log(event.target.fullname.value)
//     console.log(event.target.email.value)
//     console.log(event.target.password.value)
//     console.log(event.target.passwordTwo.value)
//     let passone= event.target.password.value
//     let passtwo = event.target.passwordTwo.value

//     if (passone!==passtwo) {
//         alert(' password donot match please re-enter password') 
        
//     }
//     event.target.fullname.value='';
//     event.target.email.value='';
//     event.target.password.value='';
//     event.target.passwordTwo.value='';
// 