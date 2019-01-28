// using logical operators && and || 
/**   
 checking is user is verified and got access to file.

 */
let userVerified = false;
let gotAccess = true;
let isGuest = true;

if (userVerified && gotAccess){
    console.log(' you can read and change the files! ')
}
else if ( userVerified || isGuest){
    console.log(' you can read files. you don\'t have access to change files');
}

else{
    console.log(' you are not allowed to read or change files');

}
    