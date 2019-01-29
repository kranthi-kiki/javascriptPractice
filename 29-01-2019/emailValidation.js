function validate(){
    let letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let input = document.getElementsByTagName('input')
    if(input[2].value.match(letters)){
        alert('submitted')
    }else{
        alert('Wrong Email address')
    }

}