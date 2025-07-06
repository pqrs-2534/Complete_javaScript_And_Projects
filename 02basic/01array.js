const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["shaktiman", "nagraj"]
const myArr2 = new Array(1, 2, 3, 4, 5, 6)

//console.log(myArr[0])

//arrays method

myArr.push(7)
myArr.push(8)
myArr.pop()
myArr.unshift(9)
myArr.shift()
//console.log(myArr)
//console.log(myArr.includes(7))
//console.log(myArr.indexOf(9))

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr)

//slice and splice

//console.log("A" ,myArr)
const myn1 = myArr.slice(1, 3)

//console.log(myn1)

//console.log("B" ,myArr)
const myn2 = myArr.splice(1, 3)
//console.log("c" ,myArr)
// console.log(myn2)


//++++++++++++++part 2 of array+++++++++++

const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros)
//console.log(marvelHeros[3][1])

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros)

const all_new_heros=[...marvelHeros,...dcHeros] //here spread method is used
//console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array= another_array.flat(Infinity)
//console.log(real_another_Array)


// console.log(Array.isArray(marvelHeros))
// console.log(Array.isArray("sandeep"))
// console.log(Array.from("sandeep"))  // from convrt anyone into array
// console.log(Array.from({name:"sandeep"})) //interesting

let score1=100
let score2=200
let score3=300

//console.log(Array.of(score1,score2,score3))


//node 02basic/01array.js