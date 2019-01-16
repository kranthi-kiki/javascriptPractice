//tract the values
// document.querySelector('#newform').addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

function validation(){
    let myValue = document.getElementById('newform').value;
    if (isNaN(myValue) || myValue<1|| myValue>20) {
        console.log('not a a valid input')
    }else{
        console.log( 'input is ok')
    }
}

document.querySelector('.newclass').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.fullname.value);
    event.target.username.value='';
    event.target.fullname.value='';
})