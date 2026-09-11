// Default Parameters ::  Allow to use function with default value.

function sayName(myName, middleName = myName.toUpperCase(), lastName = "ENTER YOUR LAST NAME") {
    console.log("My name is :: ", myName, middleName, lastName)
}
sayName("vashu")


function solve(value= {age:15, wt:50, ht:190}) { //default object can also be entered as single and multiple default parameters , parameters depend upon  each other, objects, arrays, function and anything null and defined.. 
    console.log("hello", value)
}
solve(undefined)

// NOTE :: If you set null in default parameter value , it will print null but if you set the undefined value if will give you the default value which you set before. 


function getAge() {
    return 190
}

function utility(name, age = getAge()) {
    console.log(name, " " , age)
}
utility("vashu") //if not passed , undefined will be printed. 