//++++++++++++++ Date +++++++++++++

let MyDate= new Date()
console.log(MyDate)
console.log(MyDate.toString())
console.log(MyDate.toDateString())
console.log(MyDate.toLocaleString())

console.log(typeof MyDate)

let myCreatedDate= new Date(2023,1,14)
//let myCreatedDate2= new Date(2025,1,14,20,3)
//let myCreatedDate2= new Date("2025-02-14")
           //or
let myCreatedDate2= new Date("02-14-2025")
//console.log(myCreatedDate.toDateString())
//console.log(myCreatedDate2.toLocaleString())

let myDate2= Date.now()
//console.log(myDate2)
//console.log(myCreatedDate.getTime())

//console.log(Math.floor(Date.now()/1000))

let newDate= new Date()

// console.log(newDate.getMonth())
// console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
}
)

//node 01basic/10Dateandtime.js