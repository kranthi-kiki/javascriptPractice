
var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem);





function addItem(){


    var input = document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list');
    var textNode =  document.createTextNode(item);

      if (item ==='') {
          return false;
          
      }else{

          //create li 
           li = document.getElementById('li');
           
           //create check box
           var checkbox = document.createElement('input')
           checkbox.type='checkbox';
           checkbox.setAttribute('id','check');
           //create lable
           var lable= document.getElementById('lable')

            ul.appendChild(lable);
            li.appendChild(checkbox);
            lable.appendChild(textNode);
            li.appendChild(lable);
            ul.insertBefore(li,ul.childNodes[0])
            li.className='visual'
      }
}



function removeItem(){
    li = ul.children
    
    for (let index =0; index < li.length; index++) {
        
          while (li[index] && li[index].children[0].checked) {
            
            ul.removeChild(li[index])
            }
    }


}