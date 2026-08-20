// STRING == Sequence of characters.
// e.g, "love", "l", 'love', 'l'

// 1. A primitive string.

let firstName = "Vashu"
let lastName = "Tomar"

console.log(typeof(firstName))


// 2. Strings can be printed in next line or as you want using backticks ``.
// They also allow string interpolation using ${}
// let fullName = `${firstName} ${lastName}`;

let name = `VASHU
TOMAR`

console.log(name)

// 3. new String() creates a String object, not a primitive string.

let name1 = new String("Vashu Tomar")
console.log(name1)

// Operations on Strings ::

// 1. Concatenation == Merging two Strings ::

let op1 = "English "
let op2 = "Hindi "

let finalAns = `${op1}${op2}`
console.log(finalAns)

console.log(op1 + op2)

// 2. subString == Getting sub parts of the string using this method :: starting from index to ::

// How String is saved actually in the index ::
// In the similar manner in index like ::
// |H|E|L|L|O| == Characters of the String 
// |0|1|2|3|4| == Index

let str = "Hello"
console.log(str.substring(2))

console.log(str.substring(2,4)) // starting from 2 == including 2 index character ,, ending index == 4 == do not consider.

// 3. Length == Calculating the length of String ::

console.log(op2.length)

// 4. UpperCase == All the character of String turns into Upper Case ::

console.log(op1.toUpperCase())

// 5. LowerCase == All the character of String turns into Lower Case ::

console.log(op2.toLowerCase())

// 6. charAt == Finding the character at specific index.

// 7. indexOf == Getting the index of specific Character in the String..

// 8. Split Method :: split the string on the basis of character specifically , we use split method ::

let sentence = "Heyya Everyone, how's everything going on???"

// we want to separate the sentence using the space splitting.
let words = sentence.split(' ')

console.log(words)

console.log(words.join(',')) // joins the words which were splitted in split method..

// using \ backslash in string :: the character which comes after me , consider it as normal character and not any special character like \"heyya\" == here "" treated as normal character.

let sentence2 = "She said \"how are you ?\" "
console.log(sentence2)

