const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, crptography,network
    setTimeout(function () {
        console.log('async task is complete')
        resolve()
    }, 1000)
})

//consumption of promise

promiseOne.then(function () {
    console.log("promise consumed");
})



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("promise consumed 2")
})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@chai.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "hitesh", password: "sandeep@2005" })
        } else {
            reject('ERROR: something went wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
})
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() =>
        console.log("the promise is either resolved or rejected"))


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javaScript", password: "sandeep@2005" })
        } else {
            reject('ERROR: js went wrong')
        }

    }, 1000)
})

async function consumePromFive() {

    try {
        const response = await promisefive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
    //it cannot handle error so we use try and catch
    // const response=await promisefive
    // console.log(response)
}

consumePromFive()



// async function getAllUsers() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error)

//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
        return response.json()

})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
    console.log(error)
})