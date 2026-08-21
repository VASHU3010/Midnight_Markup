// WHAT IS FUNCTION ??

// Let we have a code file  {

//                  This contains multiple console.log('what we want to print.') == duplicate values to print and 
// This makes codes bulky and toughened the readability. And debugging would be difficult.

//                          }

// So, function is something which block of code which performs the SPECIFIC TASK. 
// Either you give an input value or not. 
// Readability becomes easier and Code is more reliable. 

// IN LOOP WE NEED TO EXECUTE MULTIPLE-TIMES SET OF LINES OF CODE 
// IN FUNCTION WHENEVER WE NEED THE LINE OF CODE , WE EXECUTE THAT PARTICULAR FUNCTION. 

// BASIC SYNTAX ::

// KEYWORD :: function 
// function functionName("PARAMETERS"){
//                                      lINE OF CODE TO BE EXECUTED.
//                                      }

function sayMyName() {          //Creating Function or Function Definition
    console.log('VASHU TOMAR')
}
// Function Use == Function call :: 
sayMyName()

function printCounting() {
    for(let i=0; i<=100; i++){
        console.log(i)
    }
}
printCounting()

function printNumber(num){ //PARAMETER VALUE == num
    console.log("Printing Number :: ", num)
}
printNumber(5) //ARGUMENT VALUE == 5

function getAverage(num1, num2) { //Multiple PARAMETER
    let avg = (num1 + num2)/2
    console.log(avg)
}
getAverage(3, 99)

// RETURN FUNCTION == Function which returns some value :: 

function getSum(a, b, c){
    let sum = a + b + c 
    return(sum)
}
let val = getSum(1, 2, 3) //Storing value in val variable == the value returned by the sum function. 
console.log("Print Sum :: ", val)

function getMyName2(firstName, lastName){
    let fullName = firstName + " " + lastName
    return fullName
    // unreachable statements after return ::
    let lk = 5
    let nn = 7
}
let name2 = getMyName2("Vashu", "Tomar")
console.log(name2)

// NOTE ::::
// 1. FUNCTION WILL NOT RUN UNTIL AND UNLESS YOU WOULDN'T CALL IT.
// 2. Making variable of the ans and function call , then consoling it.

// FUNCTION EXPRESSION :: you can equate a function into variable.

function getMultiplication(a, b) {
    let ans = a*b
    return a*b
}
console.log(getMultiplication(2, 10))

let solve = function(a, b) {
    return a*b
}
console.log(solve(333, 555))


let squareNum = function(k) {
    return (k)**2 // exponent 
}
console.log(squareNum(777))

// Types of Function ::

// 1. Arrow Function :: Utility provides a concise syntax for writing a function.

// Normally function syntax ::
function getExp(x, y){
    let ans = x**y
    return ans
}
console.log(getExp(2, 10))

// using arrow function ::

let getExp1 = (x, y) => {
    ans = x**y
    return ans
}
console.log(getExp1(8, 2))

// 2. Callback Function 

