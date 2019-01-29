function validate(){
    let letters = /^[A-Za-z]+$/;
    let input = document.getElementsByTagName('input')
    let minLength =6;
    let maxLength =15;
    if(input[0].value.length>minLength && input[0].value.length<maxLength){
        alert('submited your data')
    }else if  (input[0].value.length<minLength)
     { alert(`please enter minimum of ${minLength}`)
        }
    else {
         alert(`max characters allowed ${maxLength} only`) }
}

