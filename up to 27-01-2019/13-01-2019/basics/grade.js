// calculating percentage and giving grade

let myGrade = function(marks,totalmarks){
    let percentage = (marks/totalmarks)*100;
    let grade =''


if ( percentage>=90){
    grade='A'

}else if (percentage>80){
    grade='B'
}else if( percentage>=60){
    grade='C'
}else if (percentage>50){
    grade='D'
}else{
    grade='F'
}
return `your grade is ${grade} and your percentage is ${percentage}`
}

console.log(myGrade(92,100));
