//singleton
//object.create :- another method of creating a object

//++++++++++ object literals +++++++++
const Mys1= Symbol("key1")
const jsuser = {
    "full name": "sandeep kumar",
    name: "sandeep",
    age: 20,
    Location: "bhopal",
    email: "abc@gmail.com",
    isloggedIn: false,
    lastLoggedInDays: ["Mondays", "saturady"],
    [Mys1]:"key1"
}

//console.log(jsuser.email) //this is not for everyone like we cannot access "full name " using this method
console.log(jsuser["full name"])
//console.log(jsuser["email"]) //another method of accessing a object
//console.log(jsuser[Mys1])


jsuser.email="sandeepbca2005@gmail.com"
//console.log(jsuser.email)

//Object.freeze(jsuser)
jsuser.email="sandeep@gmail.com"


//console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello js user")
}
console.log(jsuser.greeting())


jsuser.greeting2=function(){
    console.log(`hello js user,${this.name}`)
}

console.log(jsuser.greeting2())

jsuser.country="India"

console.log(jsuser.country)

console.log(jsuser)

//node 02basic/02object.js