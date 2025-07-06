
const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
   //console.log(`${key} shortcut for ${myObject[key]}`)
}

// forin for array

const programming=["js","py","java","cpp","ruby"]
for (const key in programming) {
    //console.log(programming[key]);
    
}


const map = new Map()

map.set("in", "india")
map.set("USA", "united state of america")
map.set("fr", "france")
map.set("fr", "france")

for (const key in map) {
    console.log(key)          //map is not iterable
}