// Dynamic Nature of object :: we can change the properties of object in the run time. 

let obj = {
    age : 17,
    wt : 90,
    ht : 190
}

console.log(obj)

obj.color = "white"

console.log(obj)

// there are 3 ways of cloning ::

// 1. SPREAD OPERATOR :: ... 

// e.g, 

let src1 = obj

obj.age = 34

console.log(obj)


// 2. Assign Method ::

// destination = obj. assign({}, src)

let clo = Object.assign({}, src1)

obj.age = 55