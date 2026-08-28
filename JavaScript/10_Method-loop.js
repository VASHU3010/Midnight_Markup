// 1. for-each :: if we want to perform some operation on each value of the array , we use this,, 

let arr = [10, 20, 30, 40]
arr.forEach((value, index) => {
    console.log("number :: ", value, "index :: ", index)
})
// 2. for-in :: if you have any enumerable property, and to iterate on it , we use for-in loop,  
let obj = {
    name : "Vashu",
    "full name" : "Vashu Tomar",
    age : 21,
    greet: function(){
        console.log("hello everyone")
    }
}

for(let key in obj) {
    console.log(key, " ", obj[key])
}

// 3. for-of :: iterate on objects like :: arrays , string  

let arr1 = [10, 20, 30, 50]

for(let value of arr1) {
    console.log(value)
}

let name = "VASHU"

for(let val of name) {
    console.log(val)
}
