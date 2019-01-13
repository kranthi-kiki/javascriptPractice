// creating a grade system using if and elae

/*
print as amazing if marks = 10
    if marks = above 5 print good; if marks  = abve 2 print poor
*/
let maxMarks = 10;

let yourMarks = 7;

if (yourMarks==maxMarks){
    console.log(' good job Amazing');
}
else if ( yourMarks> 5){ 
    console.log( ' good ');
}
else if ( yourMarks> 2 ) {
    console.log('poor');
}
else {
    console.log('Fail');
}