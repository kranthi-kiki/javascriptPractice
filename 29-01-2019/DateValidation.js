function validate(){
 var reDate = /^([0-9]{2})\/([0-9]{2}\/([0-9]{4}))$/;
let input = document.getElementsByTagName('input')
 
if(input[4].value.match(reDate)){
    //alert(' submited')
    let date = input[4].value;
    let dateSplit= date.split('/');
    alert(dateSplit[0])
    if((dateSplit[0]>1)&& (dateSplit[0]<31) && (dateSplit[1]>1) && (dateSplit[1]<12)&& (dateSplit[2]>1970) &&(dateSplit[2]<2050) ){
        alert('submited')
    }else{
        alert('please input valid date')
    }
}else{
    alert('please input valid date')
}
}
