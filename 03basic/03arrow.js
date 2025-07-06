const user = {
    username: "sandeep",
    price: 255,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to my website`)
        console.log(this)
    }
}

//user.welcomeMessage()
//user.username="sarthak"
//user.welcomeMessage()
//console.log(this)

//function hostel(){
//    let username= "sandeep"
//    console.log(this.username)
//}

//hostel()

const hostel =  () => {        //arrow function
   let username = "sandeep"
   console.log(this)
}

//hostel()

//const addtwo=(num1,num2) =>{
//    return num1+num2;
//}

//console.log(addtwo(3,4))

//const addtwo=(num1,num2) => num1+num2;

//const addtwo=(num1,num2) => (num1+num2) ;

const addtwo=(num1,num2) => ({username:"sandeep"});
console.log(addtwo(3,4))
