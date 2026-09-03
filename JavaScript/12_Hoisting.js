// What is Hoisting ??
// It is a kind of process which do shift variable declaration and function declaration to the top in their scope.

// 1. FUNCTION HOISTING :: value as well as declaration shifts to the top in function hoisting.

function sayMyName(finalName) {
    console.log(finalName)
}

sayMyName("Tomar")

// On the top ::

{
sayMyName2("Tomar") //function lie in the top of the code and on the top in their scope.

function sayMyName2(finalName) {
    console.log(finalName)
}
}

// 2. VARIABLE HOISTING :: only variable declaration shifts to the top of the scope not the value and it would provide the "undefined" as result. 

var age = 25
console.log(age)


// value is not shifted to top but var keyword is shifted to top - only declaration in current scope.

// console.log(age2)
// var age2 = 25


// USING LET AND CONST KEYWORD :: It would not work and throws an error,  as Reference Error. 

// CANNOT ACCESS ::

// let age3 = 25
// console.log(age3)

// console.log(age4)
// let age4 = 25


// So what we have to use ? let / const or var ::

// if we want to increase the predictability we would not use var , we will use let and const initially.

// Using Function Expression :: Hoisting will not work and it would not shift to the top of the scope. 

sayHello()
let sayHello = function(){
    console.log(sayHello)
}
