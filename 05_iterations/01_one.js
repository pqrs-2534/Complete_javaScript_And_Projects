//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log("5is best number");

    }
    // console.log(element)
}
// console.log(element);


for (let i = 0; i <= 5; i++) {
    //console.log(`outer loop:${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop:${j} and inner looop:${i}`);
        //console.log(i + "*" + j + "="+ i*j )

    }

}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
}

// break and continue 


// for (let i = 1; i <= 10; i++) {
//     if(i==5){
//         console.log("Detected 5")
//         break
//     }
//     console.log(`value of i is:${i}`)
// }

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5")
        continue
    }
    console.log(`value of i is:${i}`)
}