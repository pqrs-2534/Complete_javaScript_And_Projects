//const tinderUser=new Object()//singleton
const tinderUser = {} //nonsingleton
//console.log(tinderUser); 

tinderUser.id = "user123"
tinderUser.name = "elon musk"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    Email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "sandeep",
            lastname: "Rai"
        }
    }
}
//console.log(regularUser.fullname.userFullName.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "d", 4: "e" }
//const obj3={obj1,obj2} //wrong method to combine two object

//console.log(obj3)

const obj3 = Object.assign({}, obj1, obj2) //right method for add two object
//console.log(obj3)

// another method

const obj4 = { ...obj1, ...obj2 }
//console.log(obj4)

//from database

const User = [
    {
        id: 1,
        Email: "html@gmail.com "
    },
    {
        id: 1,
        Email: "html@gmail.com "
    },
    {
        id: 1,
        Email: "html@gmail.com "
    }
]
//console.log(User[1].Email)

//console.log(tinderUser)
//console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLogged'))

//node 02basic/03object2.js