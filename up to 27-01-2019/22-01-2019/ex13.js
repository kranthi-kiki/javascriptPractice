var newArray=[];
var index=0;

function addElement(){
      
       newArray[index]= document.getElementById('input').value;
       index++;
       document.getElementById('input').value=''

}

function display(){
     
   var p="<p>"
    for(var i=0;i<newArray.length;i++){

    p+= `Element ${i} :  ${newArray[i]}  </p> <br/>`
    }
    console.log(p);
    document.getElementById('display').innerHTML= p;
    
}