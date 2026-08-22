let obj = {
    name : "Vashu",
    "full name" : "Vashu Tomar", //when we have to write a key with space in between, then we have to kept it in double-inverted comma == "".
    age : 21,
    greet: function(){
        console.log("hello everyone")
    }
}

console.log(obj)
obj.greet()
console.log(typeof(obj))

let obj2 = obj
//This creates a shallow copy of obj, Both objects(in STACK) point to the same nested address object(in HEAP.)

// SHALLOW COPY :: A shallow copy creates a new object, but nested objects/arrays are still shared between the original and the copy.

// DEEP COPY :: A deep copy creates a completely independent copy, including all nested objects and arrays. They are different objects in memory.
// person --> { address } ,, 
// copy   --> { address }

