// document

//let element = document.querySelectorAll('p')
//let element = document.querySelectorAll('#one')

const element = document.querySelectorAll('p')

//changing content of element using textcontent

// element.forEach(function(p){
     
// p.textContent =  'i am change by javascript'

// })

element.forEach( (p)=>p.textContent =  'i am change arrow function by javascript')

//adding element by javascript

const newPara = document.createElement('p')
newPara.textContent = 'i am added via javascript'
document.querySelector('body').appendChild(newPara)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent= ' i am clicked'

})