var date = new Date();

for (let year =2014; year <=2050; year++){
    var date = new Date(year,0,1);
       
      if (date.getDay()==0) {

        //   var newPara = document.createElement('p');
        //   var node = document.createTextNode(`1st January is a Sunday in ${year}`);
        //   newPara.appendChild(node);
        //   var element = document.getElementById('leapYear');
        //   element.appendChild(newPara);

          console.log(`1st January is a Sunday in ${year}`);
      }
     

}