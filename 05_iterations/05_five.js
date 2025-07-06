const coding=["js","py","java","cpp","ruby"]

// coding.forEach( function (val){
//     console.log(val)
// } )

// coding.forEach( (item) =>{
//     console.log(item)
// }
// )

//another method

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach( (item,index,arr) =>{
        //console.log(item,index,arr)
})

const mycoding=[
    {
        languageName:"javascript",
        filename:"js"

    },
    {
        languageName:"java",
        filename:"java"

    },
    {
        languageName:"python",
        filename:"py"

    }
]

mycoding.forEach( (item)=>{
    console.log(item.languageName)
} )