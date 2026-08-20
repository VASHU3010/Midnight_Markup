// CONDITIONALS :: 

// 1. if-else Statement ::

// SYNTAX ::

// if(condition){ 
                // executed if the condition is true.
// }else{
                // executed if the condition is false.
// }

let age = 20;
if(age >= 18) {
    console.log("Can Vote"); // TRUE CONDITION
}
else {
    console.log("Cannot Vote"); // FALSE CONDITION
}

// 2. else-if ::

// SYNTAX ::

// if(condition) {
                // if TRUE :: EXECUTE, if FALSE :: MOVE FORWARD
// }
// else-if (condition 2) {
                // Multiple conditions can be checked using the else-if condition.
// }
// else-if (condition 2) {
    
// }
// else {
                // if every condition is FALSE, EXECUTE IT.!
// }

let number = 5;
let age2 = 45;
if (number == 1){
    console.log('A');
}
else if(number == 2){
    console.log('B')
}
else if(number == 3){
    console.log('C')
}
else if(number == 4){
    console.log('D')
}
// We can write if condition inside nested if-else condition ::

else if(number == 5){
    console.log('E')
    if(age2 > 18) {
        console.log("I can vote.")
    }
}
else{
    console.log('F')
}

// 3. switch case ::

// SYNTAX ::

// switch(expression) {
//     case 1 : logic 
            // break;
//     case 2 : logic
            // break;

            // It's necessary to add break between the cases , so that where the case is matched only that is print, and not other following cases..!!!

//     default : logic
// }

let num = 3

switch(num) {
    case 1 : console.log('A')
    break
    case 2 : console.log('B')
    break
    case 3 : console.log('C')
    break
    case 4 : console.log('D')
    break
    default : console.log("Not matched")
    break
}