// What is reference type ??
// non-primitive data type is reference type and we have 3 thing in it 

// 1. Objects
// 2. Array 
// 3. Function

// How these stored in memory ? 
// when we have any program , it stored in 2 ways ::
// 1. Stack Memory == all primitive data types stored in it.
// 2. heap memory == all the reference types stored in the heap memory.

// and to store any reference in the heap, it always have a reference stored in STACK.

// ACTUAL DATA STORED IN HEAP MEMORY AND IT'S REFERENCE STORED IN THE STACK.

// e.g, let arr = [2, 4, 5, 6]
// arr STORED IN STACK 
// [2, 4, 5, 6] STORED IN HEAP.

// What is Object ?
// Collection of key-value pair.
// SYNTAX :: key:value

// e.g, let obj = {
                //name : "Vashu"
                //age : 21
                //subject : "CS"
                // }


// WHAT IS ARRAY ?
// Collection of items/elements.
// It's a list.

// SYNTAX :: [ ] == array constructor 
// e.g, let arr = [1, 2, 3, 4, 5, 6]
//      let arr2 = [1, "A", 778, True]

let arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(typeof(arr)) //object 

// ARRAY CONSTRUCTOR ::

let brr = new Array('va', 1, true)
console.log(brr)
console.log(typeof(brr)) //object 

// let arr2 = [1, "A", 778, True]  ==== how this is stored in memory ? 
// All the elements of array stored in the blocks and blocks named as index. 
// We can access any element from the array using index ::

// like ::

// | 1 | A | 778 | True|  :: Elements
// | 0 | 1 | 2   | 3   |  :: Indices

console.log(brr[2])
console.log(brr[0])
console.log(arr[0])

// BUILT-IN METHODS OF ARRAY ::
// push :: insert at the end

brr.push('TOM')
console.log(brr)

// pop :: remove last item 

brr.pop('TOM')
console.log(brr)

// shift :: remove first item 

brr.shift()
console.log(brr)

// unshift :: add first item 

brr.unshift('kmn')
console.log(brr)

// slice :: getting new part of a array == SHALLOW COPY

brr.push(40)
brr.push(400)
brr.push(47)
brr.slice(2, 4) //2 starting index (INCLUDE) and 4 is ending index (EXCLUDE)
console.log(brr)

// splice :: change the content of an array == insert, replace, remove , anything at any index

brr.splice(1,1,'kunal') // 1st index se 1 value remove karo aur vha kunal insert karo.!
// if you don't want to remove anything the just insert 0
console.log(brr)

// map :: we have existing function and i want to work on those values using some function , and provide new array 

// e.g, arr[10, 20, 30] == function map == arr[100, 200, 300]
// map filter and map reduce :: 

let arr4 = [10, 20, 30];

let arr4Ans = arr4.map((number) => {
    console.log(number)
    return number*number
})
console.log(arr4Ans)

// filter :: used to filter out the data , by any means, like filtering even/odd/ or anything.

let arr5 = ['ghuht', 55, 90, 60, "hh"]
let answer = arr5.filter((value) => {
    if(typeof(value) === 'string' ){
        return true
    } else {
        return false
    }
})
console.log(answer)

// reduce :: let say we have set of value and , we have to apply some mathematical method, and we have to find sum , we can get it done using reduce. 
// It also have 2 variable types like ::
// accumulator :: the first value to be initialized and you do not initialized then it will take the first element value of the array.
// current :: the first element from the array , it will take but if that value is taken by accumulator then it will move forward to 2nd one element.

let arr9 = [10, 20, 30, 40, 50]
let answer1 = arr9.reduce((acc, curr) => {
    return acc + curr
}, 0) // Accumulator value is assigned to 0 
// and then 0+10 = 10; in array == 10; and current value shifted to 20 , index 1!
console.log(arr9)
console.log(answer1)

// sort

let arr15 = [25, 9, 8, 0, 45, 100]
arr15.sort()
console.log(arr15)
// it sorts based on the first character

// If you want numerical sorting , Use a compare function: [a - b ]

arr15.sort((a, b) => a - b)
console.log(arr15)

// for reverse :: 

arr15.sort((b, a) => a - b )
console.log(arr15)

// OR

arr15.reverse()
console.log(arr15)

// indexOf ::value is present on which index can be find out indexOf.. 

console.log(arr15.indexOf(100))
// indexOf() returns -1 when the value you're searching for does not exist in the array.

// find :: find() is used to find the first element in an array that satisfies a condition.

let arr88 = [45, 455, 70, 60]
let answer2 = arr88.find((value) => {
    return value > 80
})
console.log(answer2)








