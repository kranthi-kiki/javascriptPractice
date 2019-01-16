// using try catch 

const convertRs = (dollor)=>{
    if (typeof dollor === 'number') {
        return dollor*65
    }else{
        throw Error('ammount needs tobe in numbers')
    }
}


try { const rupees = convertRs('five');
console.log(rupees);

    
} catch (error) {
    
}

