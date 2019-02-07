"use strict"

function sinpuValidation(){
 var userName= document.sinup.username;
 var fullName=document.sinup.fullname;
 var email = document.sinup.email;
 var mobile = document.sinup.mobile;
 var password =document.sinup.password;
 var address = document.sinup.address;
 var pinCode = document.sinup.pincode;
 var msex = document.sinup.msex;
 var fsex = document.sinup.fsex;
 var country = document.sinup.country;

 if(userNameValidation(userName,6,16)){
     if( fullNameValidation(fullName,25)){
 var email = document.sinup.email;
         if(emailValidation(email)){
 var mobile = document.sinup.mobile;
             if(mobileValidation(mobile)){
                 if(passwordValidation(password,8,20)){
                     if(genderValidation(msex,fsex)){
                         
                     }
                 }
             }
         }
     }
 }

return false;

}


// userID validation 
function userNameValidation(userid,min,max){
    let userIdLength = userid.value.length;
    if(userIdLength<min || userIdLength>max || userIdLength==0){
        alert(`userId should be minimum of${min} characters and max of ${max} characters `);
        //sinpu.userid.focus(); to focus to particular userid box
        userid.focus();
        return false
    }
 return true;
}

// Name validation
function fullNameValidation(fullname,max){

     let re = /^[A-Za-z]+$/;
    
     if( fullname.value.match(re)&&fullname.value.length!=0){
         return true;
     }else{
        // $("#usename").css("border", "red solid 1px");
        //  $("#usename").css({outlineColor:"red"})
         alert(`enter characters only`)
         console.log('fullname')
         fullname.focus();
         return false;   }
}

//email id validation

 function emailValidation(email){
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(re)){
      return true;
    }else{
        alert(`please enter valid mail Id`);
        email.focus();
        return false;
    }
 }


 // Mobile number validation
 function mobileValidation(mobile){
     let re = /^[0-9]+$/;
     if(mobile.value.match(re)&&mobile.value.length==10){
         return true
     }else{
         alert('Mobile number must be in numeric and must be 10 digits ');
         mobile.focus();
         return false;
     }
    }

    // Password Validation
     function passwordValidation(password,min,max){

       let re= /^[A-Za-z0-9_@./#&+-]*$/;
       if((password.value.length>min) && (password.value.length<max) &&(password.value.match(re))){
           return true;
       }else{
           alert(`password must be minimum ${min} characters  and max ${max}characters `);
           password.focus();
           return false
       }
     }

// Gender Validation
  function genderValidation(msex,fsex){
      let count=0;
      if(msex.checked){
          count++
      }
      if(fsex.checked){
          count++
      }
      if(count==0){
          alert(`select Male/Female`);
          msex.focus();
          return false;
      }
      if(count==2){
          alert(`please select only Male/Female`)
          msex.focus();
          return false;
      } else{
          return true
      }

  }





  // Address Validation

//   function addressValidation(address){
//       let re =/^[0-9a-zA-Z]+$/;
//     if(address.value.match(re)){
//         return true;
//     }else{
//         alert(`address must have alphanumeric characters only`)
//         address.focus();
//         return false
//     }

//   }

//    // country validation
//    function countryValidation(country){
//        if(country.value=='Default'){
//            alert(`please select your country`);
//            country.focus();
//            return false;
//        }else{
//            return true;
//        }
//    }

//    //Pincode Validation
//    function pincodeValidation(pincode){
//     let re = /^[0-9]+$/;
//     if (pincode.value.match(re)){

//         alert(`sinup completed please Login`)
//         return true
//     }else{
//         alert(`pincode must be in digits`);
//         pincode.focus();
//         return false;
//     }

// }







// if(addressValidation(address)){
//     if(countryValidation(country)){
//         if(pincodeValidation(pinCode)){

//         }
//     }
// }