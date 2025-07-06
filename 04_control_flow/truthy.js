const useremail = [] // "" //"abc@gmail.com"
if (useremail) {
    console.log("got user email")
} else {
    console.log("don't get user email")
}

//falsy value:- those value which is treated as false in condition
//  0,-0,false,BigInt:-0n,"",null,undefined,NaN

//truthy value
// '0', "false" ," ",[],{},function(){}

// if(useremail.length==0){
//     console.log("Array is empty")
// }

const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("object is empty")
}


//nullish coalescing operator(??): null undefined
let val1;
// val1= 5 ?? 5
// val1= null ?? 5
val1 = null ?? 5 ?? 20
// val1 = undefined ?? 15

console.log(val1)

//ternary operator
// condition ? true: false

const teaPrice = 100
teaPrice <= 70 ? console.log("less than 80"): console.log("higher than 80")