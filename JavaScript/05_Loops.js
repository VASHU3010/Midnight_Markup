// What is Loop ??

// if you want to execute the same thing multiple Time repeatedly, manually the code becomes bulky and buddy.
// Also the code is not maintainable.

// So, to make our code maintainable when we have set of instruction to execute repeatedly == IS KNOWN AS LOOP. 

// Types of Loop ::

// 1. for loop 
// 2. while loop 
// 3. do-while loop 
// 4. for-of loop           // STUDY IN ARRAY 
// 5. for-each loop         // STUDY IN ARRAY
// 6. for-in loop           // STUDY IN ARRAY 

// 1. FOR LOOP ::

// SYNTAX ::

// for(-------------- ; --------- ; --------)
// for(initialization ; condition ; update)
//     initialize the looping variable ; condition when become false, you will get out of loop ; looping variable update
//                  {
//                  loop logic
//                  }

let i = 1;
for(i; i<=10; i++){
    console.log("Print it.!")
}

let j = 0;
for(j; j<=9; j++) {
    console.log(j)
}

// REVERSE COUNTING ::

let k = 5;
for(k; k>0; k--){
    console.log(k)
}

// KEYWORD BREAK ::

// ITERATION :: number of condition become true in a loop, and we get an new value of i or any variable, it's known as 1st, 2nd,.. nth ITERATION.

// when break reach in a loop == stops iteration == and get out of the loop..!!!

for(let i=1; i<=6; i++){
    if(i == 4){
        break;                  // if iteration reaches to value of i as 4, breaks the loop and get out of the loop..
    } else {
        console.log(i)
    }
}

// CONTINUE KEYWORD ::

// Skip the current iteration and go to next iteration !!

for (let i = 1; i<=5; i++){
    if(i ==3){
        continue
    } else {
        console.log(i)
    }
}

// NOTE ::::
// In JavaScript, it is not mandatory to include all three expressions in a standard for loop. You can omit any or all of them, but you must keep the two semicolons ; so JavaScript understands the structure
// The Missing Parts :: 
// No initialization: If your variable is already defined.
// No condition: The loop will run forever unless you use break.
// No final expression: You can update your counter inside the loop body.


// 2. WHILE LOOP :: 

// SYNTAX ::

// initialization somewhere out of while body 
// while(condition){
            //  loop logic 
            // update
// }

let z = 1
while(z<=10){
    console.log(z)
    z++
}

// REVERSE COUNTING ::

let s = 5;
while(s > 0){
    console.log(s)
    s--
}

// BREAK KEYWORD ::

let q = 1;
while( q < 5 ){
    if(q == 3){
        break;
    } else {
        console.log(q)
    }
    q++
}

// CONTINUE KEYWORD ::

let m = 1;
while( m < 5 ){
    console.log("Inside the loop")
    if(m == 3){
        m++         // this needs to be set so that we will not stuck in a loop.
        continue
    } else {
        console.log(m)
    }
    m++
}

// 3. DO-WHILE LOOP ::
// Most people do not use this loop cause of it's feature, it consider as this loop have issues.

// SYNTAX :: 

// INITIALIZATION 
// do{
        // logic
        // UPDATE
// } while(condition)

let l = 1
do{
    console.log("hello")
    l++
} while( l <= 6)

let g = 5
do{
    console.log(g)
    g--
} while(g>0)

// NOTE :: WHY WE DON'T USE IT ? :: 

// it can enter the logic space without any condition , and it prints the value of console , and after printing it checks the conditions !! == which is consider as violation in the code and described as issue.

// We don't check the condition of the iteration for the first time. 