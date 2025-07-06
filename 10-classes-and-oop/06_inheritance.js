class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}



class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
       console.log(`a new course was added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@Teacher.com","abc@123")
chai.addCourse()

const masalaChai=new User("masalaChai")

masalaChai.logMe()

//console.log(masalaChai===chai)
console.log(chai instanceof User)