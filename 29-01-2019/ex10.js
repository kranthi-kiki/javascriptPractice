//volume formula v= 4/3pi r*r*r

function getVolume(){

    let radius = document.getElementById('radius').value;
    console.log(radius);
    let volume;
    volume=(4/3)*Math.PI*radius*radius*radius;
    console.log(volume);
    document.getElementById('volume').innerHTML = volume;
}