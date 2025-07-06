

function sayMyName() {
    console.log("S")
    console.log("A")
    console.log("N")
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
}
sayMyName()


function addTwoNum(number1, number2) {
    console.log(number1 + number2)
}
//addTwoNum(4,6)
//addTwoNum(4,"6")
//addTwoNum(4,"a")

function addTwoNum(number1, number2) {
    //let result=number1+number2
    //return result;
    //or
    return number1 + number2
}

const result = addTwoNum(4, 6)

//console.log(result)

function loginUserMessage(Username = "san") {     //here san is default value
    if (Username === undefined) {
        console.log("please enter a username")
        return
    }
    return `${Username} Just Logged In`
}

//console.log(loginUserMessage("sandeep"))

//part-II of function

function CalculateCartPrice(...num1){
    return num1;
}

console.log(CalculateCartPrice(200,400,500))
//use of object as a function
const user={
    username:"sandeep",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

//another method

handleObject(
    {
        username:"sam",
        price:199
    }
    
)

const myNewArray=[
    200,400,600,800
]

function returnSecondvalue(anyArray){
    return anyArray[0]
}

console.log(returnSecondvalue(myNewArray))





//node 03basic/01function.js