function string (str){

    if (str.length < 4)
  {
    return false;
  }
   var first = str.substring(0, 4);
  if (first == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }

}

console.log(string('javascript'))