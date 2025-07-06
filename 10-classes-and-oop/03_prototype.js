// let myName="hitesh   "

// console.log(myName.truelength)


let myheros=["thor","spiderman"]

let heropower= {
    thor:"hammer",
    spiderman:"sling",
    getSpiderpower:function(){
        console.log(`spidey power is: ${this.spiderman}`)
    }
}


Object.prototype.hitesh= function(){
    console.log(`hitesh is present in all object`);
}

    Array.prototype.heyhitesh=function(){
        console.log(`hitesh says hello`)
    }

// heropower.hitesh()

// myheros.hitesh()
// myheros.heyhitesh()
// heropower.heyhitesh()


// inheritance

const User={
name:"chai",
email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeacherAssistant={
    makeavailabel:false
}

const TASupport={
    makeAsiignment:'js assignment',
    fullTime:true,
    __proto__:TeacherAssistant
}

Teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TeacherAssistant,Teacher)


let anotherUsername= "chaiAurCode  "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
