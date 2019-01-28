//16. Find the leap years in a given range of years

function leapYearRange(year1,year2){
var result = [];
var i=year1;
for(i;i<year2;i++){
   if( i%4==0){
       //console.log(i);
       result.push(i);

    }
 }
 console.log(result)
}
console.log(leapYearRange(2012,2016))