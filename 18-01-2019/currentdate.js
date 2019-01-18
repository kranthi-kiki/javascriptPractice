var day = new Date();
var month = day.getMonth();
var date = day.getDate();
var year = day.getFullYear();

console.log(` Date: ${date}/${month+1}/${year}`);
 var dateOutput = ` Date: ${date}/${month+1}/${year}`;
document.getElementById('dateOutputId').innerHTML = dateOutput;