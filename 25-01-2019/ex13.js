//.Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function isObject(obj){
     var type = typeof obj
    return type === 'function'|| type =='object'
}

function keys(obj){
    if (!isObject(obj)){
        return [];
    }

    var keys=[];
    for(var key in obj)
    {
        keys.push(key);

    }
    return keys;
}
function details(name){
    this.name = name;

}
details.prototype.tagline = 'cute';
var keysNames=keys(new details('kiki'));
console.log(keys(new details('kiki')));

keysNames.sort();

console.log(isObject(details));