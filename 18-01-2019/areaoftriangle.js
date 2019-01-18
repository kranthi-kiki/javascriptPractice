var side1=5;
var side2=6;
var side3=7;
// area of triange formula perimeter(p) = (side1+side2+side3)/2 
// AOT= squareroot of p(p-side1)(p-side2)(p-side3)
var p= (side1+side2+side3)/2;

var areaOfTriangle = Math.sqrt(p*((p-side1)*(p-side2)*(p-side3)));

console.log(areaOfTriangle.toFixed(2));
// var aotOutput =` Area of Triangle ${areaOfTriangle.toFixed(2)}` ;
document.getElementById('areaoftriangleId').innerHTML = areaOfTriangle.toFixed(2);