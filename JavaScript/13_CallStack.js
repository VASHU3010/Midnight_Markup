// function callstack :: 

// What is Stack ?

// kind of data structure which store the data , in the LIFO format :: 
// LAST IN FIRST OUT :: which enters last would be out first or picked first. 

// 2. 

function greetMe(greet, fullName){
    console.log("hello", fullName)
    greet()
}

// 1. 

let greet = function() {
    console.log('Greeting of the day.')
}

// greet()

greetMe(greet, "Babbar")

// 3. 

function solve(number){
    return function(number){
        return number*number //function is returning another function 
    }
}

let ans = solve(5)
let ans1 =ans(10)

console.log(ans1)

// Storing functions in a data Structures ::

const arr = [
    function(a,b) {
        return a+b
    },
    function(a,b) {
        return a*b
    },
    function(a,b) {
        return a-b
    }
]

let first = arr[2]
let and = first(5,10)
console.log(and)

// used under object ::

let obj = {
    age : 25,
    height : 180,
    weight : 39,
    greet: () => {
        console.log("hello world")
    }
}
console.log(obj.age)
obj.greet()

console.log(greet)

let greet2 = function(){
    console.log("hello")
}
