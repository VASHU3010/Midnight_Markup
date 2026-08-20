console.log("babbar")

// ARITHMETIC OPERATORS ::

let a = 5;
let b = 9;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

// UNARY OPERATORS ::

let c = 20;

console.log(c--) // Post Decrement
console.log(c++) // Post Increment
console.log(--c) // Pre Decrement
console.log(++c) // Pre Increment

// ASSIGNMENT OPERATORS :: SHORTHAND NOTATIONS ::

let d = 19;

console.log(d += 10) // d = d+10
console.log(d -= 10) // d = d-10
console.log(d *= 10) // d = d*10
console.log(d /= 10) // d = d/10

// COMPARISON OPERATORS ::

let e = 95;
let f = 63;
console.log(e > f) // Greater than
console.log(e < f) // Less than
console.log(e >= f)
console.log(e <= f)
console.log(e == f) // LOOSE EQUALITY == Compares only valur but not data type.
console.log(e != f)
console.log(e !== f) // Not STRICT EQUALITY
console.log(e === f) // value and type of data must be same both.. == STRICT EQUALITY 

// TERNARY OPERATOR ::

let age = 22;
let status1 = (age>18) ? 'I can vote' : 'I cannot vote';
console.log(status1)

// LOGICAL OPERATORS ::

// 1. AND :: 

let ans1 = (true && true && true)
console.log(ans1)

let ans2 = (true && false && true)
console.log(ans2)

// 2. OR :: 

let ans3 = (false || false || false)
console.log(ans3)

let ans4 = (true || false || true)
console.log(ans4)

// 3. NOT ::

let ans5 =( !true )
let ans6 =( !false )

// FALSY / TRUTHY VALUE ::

let falsyy = (false && 'bob')
console.log(falsyy)

let truthyyy = (true || 3)


// BITWISE OPERATORS ::

//  Since our computer only understands 0s and 1s :: KNOWN AS BITS.

// OPERATORS IT HAVE :: 
// AND, OR, NOT, XOR, >>, <<
// Defined by the truth table as follows ::

// 1. AND Truth Table :: 

// | A | B | A AND B |
// | - | - | ------- |
// | 0 | 0 | 0       |
// | 0 | 1 | 0       |
// | 1 | 0 | 0       |
// | 1 | 1 | 1       |

console.log(2 & 5)

// 2. OR TRUTH TABLE ::

// | A | B | A OR B |
// | - | - | ------ |
// | 0 | 0 | 0      |
// | 0 | 1 | 1      |
// | 1 | 0 | 1      |
// | 1 | 1 | 1      |

console.log(2 | 5)

// 3. NOT TRUTH TABLE ::

// | A | NOT A |
// | - | ----- |
// | 0 | 1     |
// | 1 | 0     |

console.log( ~0 ) // it will give answer as -1 BECAUSE most/left significant bit is 1 then he number is negative -
// and we take 2's compliment == 1's compliment + 1
// 1's compliment is flipping whole number.
// But if the RIGHT MOST BIT OR LEASE SIGNIFICANT BIT is 1 then the number is positive.

// 4. XOR TRUTH TABLE ::

// | A | B | A XOR B |
// | - | - | ------- |
// | 0 | 0 | 0       |
// | 0 | 1 | 1       |
// | 1 | 0 | 1       |
// | 1 | 1 | 0       |

// LEFT SHIFT ::

console.log(5 << 1) //Shift 5 by 1 place.
// 5 left shift by 2 == 5*2*2
// 5 left shift by 4 == 5*(2)^4

// RIGHT SHIFT ::

console.log(10 >> 2) //Shift 2 by 5 digit in right.
// 10 right shift by 2 == 10/(2)^2



