var details = {firstName:'',lastName:'',age:'',mobileNumner:'',emailId:'',

set input(firstname){this.firstName = firstname }, 
// set input(value2){this.lastName=value2},
set input(lastname){this.lastName = lastname},
set input(age){this.age = age},
set input(number) {this.mobileNumner = number},
set input(email){this.emailId= email},

get fullDetails() { return 'your name is '+ this.firstName+' '+this.lastName + ' you are '+this.age +' years old'+

  ' your mobile number: '+this.mobileNumner+' and your email id : '+ this.emailId}
};
details.firstName = 'kiki';
details.lastName = 'B';
details.age= 20;
details.mobileNumner = 9573682409;
details.emailId = 'kranthi.kiki@gmail.com';

console.log( details.fullDetails)

// details.firstName = document.getElementById('firstname').value//'kiki';
// console.log(details.firstName)
// details.lastName = document.getElementById('lastname').value//'B';
// details.age=document.getElementById('age').value //20;
// details.mobileNumner =document.getElementById('number').value //9573682409;
// details.emailId = document.getElementById('email').value//'kranthi.kiki@gmail.com';


// document.getElementById('').innerHTML = details.fullDetails;