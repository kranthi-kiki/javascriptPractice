function greeting(name) {
   console.log('Hello ' + name);
  }
  //
  
  function processUserInput(callback) {
    var name = "kiki "
    callback(name);
  }
  //
  processUserInput(greeting);