// class is just a box , which have 2 types of majority ::
// 1. class functionality or behavior 
// 2. Class State/Property

class Human {

    // PROPERTIES :: 
    age = 14 //public :: can be used in side the class and outside the class as well . 
    #wt = 40 //private :: can only be used inside the class and not outside -- by adding "#" with the property defined.
    // can be accessed as "" this.#wt ""
    // if i want to use it outside the class :: we can access it by using "getter and setter"
    // getter :: to get the value == fetch
    // setter  :: to set the value for the function == modify
    ht = 130

    // constructor :: a special function to give value to the variable which is declared but no other value is given to it. 
    // for example, here defined 
    // marks;

    constructor(newAge, newHt, newt ) { //newAge and newHt are acting as parameters and we need to pass them as arguments to have s0ome values inside them. 
        this.age = newAge // we can access the object by using this keyword.
        this.ht = newHt
        this.#wt = newt
    }

    walking(){
        console.log("i am walking", this.#wt)
    }
    running(){
        console.log("i am running")
    }

    get fetchWeight() {
        return this.#wt
    }

    set modifyWeight(val) {
        this.#wt = val
    }
}

// we use getter and setter only to access the private field outside the class to provide the encapsulation == abstract layer.. 
// to provide a data production. 

let obj = new Human(50, 190)
console.log(obj.age)
console.log(obj.ht)

console.log(obj.fetchWeight)

obj.walking()
obj.running()