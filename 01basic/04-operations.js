let value=3
let negValue= -value
//console.log(negValue)

// some operation

//console.log(2+2);
//console.log(2-2);
//console.log(2%2);
//console.log(2**4);
//console.log(2*2);
//console.log(2/2);

let str1= "hello"
let str2= "sandeep"
let str3= str1 + str2
//console.log(str3)

//console.log(1+"2")
//console.log("1"+2)
//console.log("1"+2+2)
//console.log(1+2+"2")

// so use parentheses for better coding practice bellow is example

//console.log("1"+(2+2))
// or
//console.log((3+4)*5) 

//console.log(+true)  // cannot do these type of conversion
//console.log(+"") //same for this


let gameCounter=100
++gameCounter; // this is example of prefix

//console.log(gameCounter);

/*
 postfix:- If used postfix, with operator after operand (for example, x++),
 the increment operator increments and returns the value before incrementing.
*/


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

/*
   prefix:-If used prefix, with operator before operand (for example, ++x), 
   the increment operator increments and returns the value after incrementing.
*/

let a = 3;
const b = ++a;

//console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"


// node 01basic/04-operations.js