document.querySelector('.sinup').addEventListener('submit',(event)=>{
    
    event.preventDefault();
    console.log(event.target.fullname.value)
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    console.log(event.target.passwordTwo.value)
    let passone= event.target.password.value
    let passtwo = event.target.passwordTwo.value

    if (passone!==passtwo) {
        alert(' password donot match please re-enter password') 
        
    }
    event.target.fullname.value='';
    event.target.email.value='';
    event.target.password.value='';
    event.target.passwordTwo.value='';
})