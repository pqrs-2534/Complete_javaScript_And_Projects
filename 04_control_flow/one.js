//if statement
//if(condition){      //condition= true/false
// code body
//}

// <,>,<=,!=,==,===,!===

const temperature = 50
if (temperature<50){
   console.log("tempature less 50")
}
else{
   console.log("temperature greater than 50")
}
console.log("HELLO SIR ")

const score=200

if(score<300){
    const power="fly"
    console.log(`user power:${power}`);
}
console.log(`user power:${power}`);


const balance = 1000
if(balance>100) console.log("test1"), console.log("test2");  //it is not good method for coding

if (balance < 500) {
    console.log("less than 500");
} 

else if(balance<750){
    console.log("less than 750 ")
}

else if(balance < 900) {
    console.log("balance less than 900");
} 

else {
    console.log("balance less than 1200");
}


const userloggedIn = true
const debitcard = true
const userloggedInbyemail=true
const userloggedInbygoogle=true

if(userloggedIn && debitcard && 2==3){
    console.log("allow to buy course")
}

if (userloggedInbyemail || userloggedInbygoogle){
    console.log("user logged in")
}