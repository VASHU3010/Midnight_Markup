// VAR KEYWORD ::
// can be acessed gloablly-scoped ::

var age = 25;
if(true){
    console.log(age)
}

// can be accessed function-scoped ::
function solve() {
    var age = 25;
    console.log(age);
}

// ***Outside the function it will throw error :: *** //

// console.log(age);
// solve();

//*** LET KEYWORD :: ***//

// Acessed to block-scoped ::
let a =10;
console.log(a);

// Outside the block it will throw an error :: //
{
    let b =10;
}
console.log(b);

// redefine or redeclare must not be allowed :: 
// it will throw an error

let a = 5;
let a = 10;


// dynamically-typed variable :: 
// we can assign multiple-types of value to store in it ::

let name = "bacd";
let name = 10;

// CONST KEYWORD ::
// it's value will not be changed but declared permanently unlike let keyword ::

const a =28;
console.log(a);

a = 50;
console.log(a);