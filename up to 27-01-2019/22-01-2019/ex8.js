//Write a JavaScript program to find the most frequent item of an array.

var array =[1,2,3,43,4,4,4,5,5,6,6,,'fs','k','k','k','k','k','f','f','f','f','fjj','jr'];
var count = 0;
var mostFrequent=1;
var mostFrequentElement;

for(var i=0;i<array.length;i++){
     
     for(var j=i;j<array.length;j++){
         if(array[i]==array[j]){
             count++;
            
         }
         if(mostFrequent<count){
             mostFrequent=count;
             mostFrequentElement =array[i]
         }

     }
     count=0;

}
console.log('most repeted element is '+ mostFrequentElement+ ' number of times = '+mostFrequent);