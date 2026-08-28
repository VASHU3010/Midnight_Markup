arr = [10, 30, 40, 80, 788]

function getSum(arr) {
    let len = arr.length
    let sum = 0
    for(let index = 0; index<len; index++) {
        sum = sum +arr[index]
    }
    return sum
}

let totalSum = getSum(arr)
console.log(totalSum)