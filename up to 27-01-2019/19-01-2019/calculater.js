

function multiplyNumber(){
    let numOne =  Number(document.getElementById('num1').value);
    let numTwo =Number (document.getElementById('num2').value);
    console.log(numOne);

   
      var multiResult = numOne * numTwo;
      document.getElementById('multiResult').innerHTML = multiResult;

}

function divisionNumber(){
    var numOne =  Number(document.getElementById('num1').value);
    var numTwo =Number (document.getElementById('num2').value);

 var divisonResult = numOne / numTwo;
 document.getElementById('divisonResult').innerHTML = divisonResult;

}

