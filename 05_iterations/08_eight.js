const myNum=[1,2,3]

// const myTotal=myNum.reduce(function(acc,currval){
//     console.log(`accumulator: ${acc} and currentValue: ${currval}`);
    
//     return acc+currval
// },0)

//for arrow function👇👇👇

// const myTotal=myNum.reduce((acc,currval)=>{
//     console.log(`accumulator: ${acc} and currentValue: ${currval}`);
    
//     return acc+currval
// },0)

//console.log(myTotal);

const shoppingCart=[
    {
        courseName:"javascript",
        CoursePrice:1999
    },
    {
        courseName:"java",
        CoursePrice:999
    },
    {
        courseName:"python",
        CoursePrice:2500
    },
    {
        courseName:"C++",
        CoursePrice:1500
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.CoursePrice,0)

console.log(priceToPay)
