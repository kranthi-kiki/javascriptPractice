//function displayDateResult(){
var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var date = new Date();
var todayName = days[date.getDay()];
//console.log(todayName)
//date.setDate()
var hours = date.getHours();
var mins= date.getMinutes();
var seconds = date.getSeconds();
var amPmFrmat;
if (hours>12) { 
    hours = hours-12;
    amPmFrmat ='PM'

    
}else{
    amPmFrmat ="AM"
}
 var firstOutput = ` Today is : ${todayName}`;
 var secondOutput = `Current Time : ${hours} ${amPmFrmat}:${mins}:${seconds}`;
 document.getElementById("firstOutputId").innerHTML = firstOutput;
 document.getElementById("secondOutputId").innerHTML = secondOutput;


console.log(` Today is : ${todayName}`);
console.log(`current time : ${hours} ${amPmFrmat}:${mins}:${seconds}`);
//}