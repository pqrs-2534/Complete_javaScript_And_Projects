
// primitive data type:- called by value
/*
7 types:- String , Number, Boolean , Null,undefined, Symbol , BigInt
*/


const Score=100
const ScoreValue=100.3

const isLoggedIn=false
const outsideTemp= null

const Id= Symbol("123")
const anotherId= Symbol("123")

//console.log(Id==anotherId)


const BigInt= 85464795145554556n


//Non primitive data type :- called by reference
/*
 3type:- Array, Objects ,function
*/


const heros=["saktiman" ,"nagraj" ,"doga"]

let myobj= {
    name:"sandeep",
    Age:22

}

const myfun= function(){
    console.log("hello world")
}

console.log(typeof outsideTemp)
console.log(typeof heros)
console.log(typeof Score)

