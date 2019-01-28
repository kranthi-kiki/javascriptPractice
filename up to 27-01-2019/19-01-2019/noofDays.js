var date = new Date();
var xmas= new Date(date.getFullYear(),11,25);

if ( (date.getDate()>25) && (date.getMonth()=11)) {

    xmas.setFullYear(xmas.getFullYear()+1);
    
}

const oneDay = 1000*60*60*24;
const noOfDays = Math.ceil((xmas.getTime()-date.getTime())/oneDay);
console.log(noOfDays)