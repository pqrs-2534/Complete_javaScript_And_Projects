//var c=300  //global scope

let a = 50
if (true) {
    let a = 10
    const b = 20  //inside {}:- local scope
    //var c = 30  //don't use var
    //console.log("inner value:", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

//+++++++++++part-II of scope+++++++++++++++++

//nested scope
function one() {
    const username = "sandeep"

    function Two() {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    Two()
}

one()

if (true) {
    const username = "sarthak"
    if (username == "sarthak") {
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)
}

//console.log(username) // its gives you error because we cannot access any method from outside the if condition 

//+++++++++interesting++++++++++

console.log(addone(5))
function addone(num1){
    return num1+1
}


//addtwo(6)
const addtwo= function(num2){
    return num2+2
}


//access of data depend on the how to declare a function 


// node 03basic/02_Scope.js