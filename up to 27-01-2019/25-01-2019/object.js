var animal = {};
animal.userName = 'kiki';
console.log(animal);
animal['tagline']= 'cute';
console.log(animal);
var noises =[];
animal['noises']=noises;
console.log(animal);
var count=0;
for( key in animal){
    count++;
    console.log(count)
   if(key == 'userName'){
       //return `Hi this is kranthi`
    console.log(`Hi my name is ${animal.userName}`)   }
    else if (key =='tagline') {
       console.log(`i like to say ${animal.tagline}`)
    }
    

    }

    