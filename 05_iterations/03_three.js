//for of :- array specific loop

//["","",""]
//[{},{},{}]

// const arr=[1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num)

// }

const greeting = "hello world"

for (const greet of greeting) {

    // console.log(`print each word:${greet}`);  
}

// map:-The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.


const map = new Map()

map.set("in", "india")
map.set("USA", "united state of america")
map.set("fr", "france")
map.set("fr", "france")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key,":",value)
    
}

// object

const mygame={
    'game1':'nfs',
    'game2':'spiderman'
}

// for (const [key,value] of mygame) {  // not for object
//     console.log(key,":",value)
// }