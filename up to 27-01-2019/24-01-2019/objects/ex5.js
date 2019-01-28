//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

function Cylinder(height,diameter){
    this.height = height;
    this.diameter = diameter;
}

Cylinder.prototype.Volume= function (){
    var radius = this.diameter/2;
    return this.height*Math.PI*radius*radius;

}

var cylinder = new Cylinder(7,4);
console.log('volume= ',cylinder.Volume().toFixed(4));
//
