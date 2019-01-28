class User {

    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFullName(){
        // let fullname = `${this.firstname}  ${this.lastname}`;
        // return fullname;
        console.log(`${this.firstname} ${this.lastname}`)
    }
    editName(newname){
        const myname= newname.split(' ')
        this.firstname = myname[0];
        this.lastname = myname[1]
    }
}

const kiki = new User('kiki','heyB',20);
console.log(kiki)

kiki.getFullName()

kiki.editName("kranthi kiran");
console.log(kiki.getFullName())