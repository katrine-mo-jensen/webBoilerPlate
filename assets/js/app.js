class testObject {

    constructor (msg) {
        /* console.log("Hello my old friend" + msg) */
        this.message=msg
        console.log(this.message);
    }
}

const myObject = new testObject("object 1")
const myObject2 = new testObject("object 2")

myObject.message = "ny message"
myObject2.message = "sven"

console.log(myObject.message)
console.log(myObject2.message)