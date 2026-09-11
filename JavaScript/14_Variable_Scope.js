// 1. Global Scope ::

// it is in global scope  :: it can be used and accessed in any file , loop or anything within the whole complete structure.  

var age = 15  
console.log(age)
{
    console.log(age)
}
if(true) {
    console.log(age)
}
for(let i=0; i<=5; i++) {
    console.log(age)
}
function sayHello() {
    console.log("It is function :: ", age)
}
sayHello()

// 2. Function Scope :: 

function sayHi() {
    var name = "Earth"
    console.log("Hey", name)
}
// console.log(name) 
//It will bw accessed outside the function - known as function scope. 
sayHi()

// 3. Block Scope ::

console.log(height)
{
    var height = 180
}
