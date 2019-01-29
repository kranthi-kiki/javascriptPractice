function validate(){

var firstName =document.form1.firstName.value
alert(firstName)
if(firstName==''){
    alert ('please enter your name')
}else{
    alert(`your name is ${firstName}`  )
}

}

// function validate(){
// let input = document.getElementsByTagName('input')
// for(let i=0;i<input.length;i++){
//     if(input[i].name==''){
//         console.log(input[i])
//         alert(`please fill ${input[i].placeholder}`)
//     }else{
//         alert(' your data is submited')
//     }
// }
// }
// //     console.log(document.getElementsByTagName('input'))

// // }

// // var input = document.getElementsByTagName('input')

// // console.log(document.getElementsByTagName('input'))

// // console.log(input[0].placeholder);