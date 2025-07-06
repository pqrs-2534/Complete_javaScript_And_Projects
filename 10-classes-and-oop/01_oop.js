// object literals

const user = {
    userName: "hitesh",
    loginCount: 8,
    signedIn: true,

    getuserDtails: function () {
        console.log("got user details from database");
        console.log(`username:${this.userName}`)
        console.log(this)
    }

}
// console.log(user.userName)
//  console.log(user.getuserDtails())
//  console.log(this)

//new keyword always give new instances
function User(userName, loginCount, signedIn) {
    this.userName = userName;
    this.loginCount = loginCount
    this.signedIn = signedIn

    // return this
}

const userOne = new User("sandeep", 12, true)
const userTwo = new User("sarthak", 25, false)
console.log(userOne.constructor)
// console.log(userTwo)

//new keyword :- 1. new object is created
//               2.construction function is called
//               3.all step is injected