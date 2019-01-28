function string(str){
  
  var firstLetter = str.substring(0,1);
  return firstLetter+str+firstLetter;
}

console.log(string('happy'))