function leapYear(){

    var year = document.getElementById('year').value;

    if (year%4==0) {
        var outPut = `${year} is a leap year`;
        document.getElementById('outPut1').innerHTML = outPut;
        // console.log(outPut)
    }else {
        var notLeapYear = ` ${year} is not a leap year`
        document.getElementById('notLeapYear1').innerHTML = notLeapYear;

    }

}

// console.log(leapYear())



