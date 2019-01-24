//7. Write a JavaScript program which returns a subset of a string

Object.prototype.subString = function(){

    var subset =[];
    for(var i=0;i<this.length;i++){

   
        for(var j=i+1;j<this.length+1;j++){
            
            subset.push(this.slice(i,j));
         
        }
   
    }
    return subset;
    console.log(subset)
};

console.log('kiki'.subString());