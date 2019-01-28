
function randomFun(){


var random = Math.ceil(Math.random()*(10));
var input = document.getElementById('input').value;
if (random==input) {
     
    document.getElementById('outputOne').innerHTML=`Good Work`
     console.log(`Good Work`)

    //  var randomP = document.createElement('p');
    //  var randomNode = document.createTextNode('Good Work');
    //  randomP.appendChild(randomNode);
    //  var element = document.getElementById('random');
    //  element.appendChild(randomP);
}else{
    document.getElementById('outputTwo').innerHTML= `Not Matched`

    // var randomP1 = document.createElement('p');
    //  var randomNode1 = document.createTextNode('Not Matched');
    //  randomP1.appendChild(randomNode1);
    //  var element = document.getElementById('random');
    //  element.appendChild(randomP1);
    console.log(`Not matched`)
}
}