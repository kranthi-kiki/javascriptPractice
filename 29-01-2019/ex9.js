function getCount(){

    let value= document.getElementById('select')
    let count=0;
    console.log(value)

    for(let i =0;i<value.length;i++){
        count++
        console.log(value[i]);
        alert(value[i])
    }
    alert(count)
}