//stack and heap
//stack used in (primitive) and heap used in(Non promitive)

let myYoutubeName="hitesh"              //stack give copy of the object
let anotherName= "myYoutubeName"
anotherName="chaiaurcode"

//console.log(anotherName)
//console.log(myYoutubeName)

let userone={
    email: "user@gmail.com",          //heap give the reference of the object
    upi:"user@ybl"
}

let userTwo= userone

 userTwo.email="sandeep@gmail.com"  //some revison required

console.log(userone.email)
console.log(userTwo.email)


// node 01basic/07memory.js