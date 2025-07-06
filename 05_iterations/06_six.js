// const coding=["js","py","java","cpp","ruby"]

// const value=coding.forEach( (item)=>{
//     console.log(item)
//     return item;           //for each cannot return vlaue
// } )

// console.log(value)

const myNum=[1,2,3,4,5,6,7,8,9,10]

// const value= myNum.filter( (num)=> num<7)      //filters are return value 

// console.log(value);

//another method
// const value= myNum.filter( (num)=> {
//        return num<7
// })

//console.log(value);

// const newNum=[]

// myNum.forEach((num)=>{
//     if (num>6) {
//         newNum.push(num)
        
//     }
// })

// console.log(newNum)

const book=[
    {title:'bookone',genre:'fiction',publish:1981,edition:2004},
    {title:'booktwo',genre:'non-fiction',publish:1981,edition:2005},
    {title:'bookthree',genre:'history',publish:2001,edition:2006},
    {title:'bookfour',genre:'non-fiction',publish:1981,edition:2001},
    {title:'bookfive',genre:'science',publish:2003,edition:1998},
    {title:'booksix',genre:'non-fiction',publish:1981,edition:1947},
    {title:'bookseven',genre:'history',publish:1981,edition:1847},
    {title:'bookeight',genre:'fiction',publish:1981,edition:2019}
]

//const userBook= book.filter((bk)=> bk.genre=='history')
//const userBook=book.filter((bk)=> bk.publish>= 2000)
const userBook=book.filter((bk)=> {return bk.publish>= 2000 && bk.genre==='history'})
console.log(userBook);
