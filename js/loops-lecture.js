"use strict";
//
//~*~ While Loops ~*~
//

//are we there yet?
// var areWeThereYet;
//
// while(!areWeThereYet){
//     areWeThereYet = confirm("Are we there yet?");
// }


// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation. While the condition is not true (!areWeThereYet), do some stuff (from the body of the loop)

// var haveToy = confirm("Can I have the toy, please?!");

// //Past modules: Maybe use the var into an alert and show that we've captured that value. .
// alert("Hey, it is " + haveToy + " that you can have the toy");

//NOW: How we can use this variable + boolean inside with a while loop?

// while(!haveToy){
//     haveToy = confirm("PLEASEEEEEEEEEEEEEEE can I have the toy?");
// }

// if(haveToy){
//     alert("Thanks pops! You're the best :)");
// }

// Notice that much like an if statement, our while loop will only run if the initial condition is met.
// If we give Codie the toy from the get go, we won't see the behavior in the loop at all.

// TODO: Quasar~ create a WHILE loop that runs as long as i is less than 10;
//As long as the var i < 10 . . console.log information about what's going on?
//AVOID AN INFINITE LOOP - remember you need, in some way, to add from i [think: like a counter .]

//While loop up to 10:
// var i = 0;
// while (i <= 10){
//     console.log("Currently the variable i is : " + i);
//     i += 1;
// }
//
// console.log("---------~--------");
//
// //While loop down from 10
// i = 10;
// while (i >= 10){
//     console.log("Hey there! i is currently : "+ i);
//     i--;
//
// }


//~*~ Do-While Loops ~*~


// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once
// [do this thing for sure this first time . . then check condition to continue VS. check condition . . will I do this thing at all?]

// do {
//  Code to be run.
// } while (condition)

// Consider:

// while (false) {
//     console.log("will you ever see me?");
// }
//
// do {
//     console.log("But what about me?");
// } while (false);

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time be for stopping.


// do {
//     var secret = prompt("What is the secret password?");
// } while ( secret !== "sesame" )

// Let's have some fun with what we've seen so far: A conversation between a TOMB THIEF and the GUARDIAN TO THE DOOR:

// var secret;
//
// // while loops behave similarly to our IF conditionals we've seen before
//
// while (secret !== "sesame") {
//     secret = prompt("'To proceed, you must tell me the secret password. . .'");
// }
//
// if (secret === "sesame"){
//     alert("'YES. You have whispered the correct password.'");
//     alert("Nothing happens.");
// }
//
//
// // do - while = fires AT LEAST ONCE, even if the condition (secret does not equal string "sesame") isn't met
// do {
//     alert("The door is unmoving. 'I thought I told you already what the secret password was? o_o' the TOMB THIEF asks");
// } while (secret !== "sesame")
//
//
// // note the same condition being asked here as the do-while, but we don't ever seen George's message with this type of loop
// while (secret !== "sesame"){
//     console.log("'You won't see me, but my name is George, and I'm the guy that opens the door - sorry, I overslept!! Thanks for visiting the FORBIDDEN CAVERNS!'");
// }
//
// //while loop matches condition and fires - to avoid infinite loop, George 'resets' our variable in our story
// while (secret === "sesame") {
//     alert("I definitely told you already what the secret password was. -_- This door is wack.");
//     alert("The door SHUDDERS SUDDENLY and opens crankily with a cacophany of noise that is worrisome. .");
//     console.log("'Hey, George again - come on in, I need to put the door offline for a bit after you're in, so I'm going to reset the secret. Enjoy the FORBIDDEN CAVERNS!!'");
//     secret = "georgewuzhere";
// }

// We can also use what we've learned above within the body of your functions:

//Multiply by two. . until it is greater than 100
//Parameter to accept a num argument when calling - this parameter will be our starting point

function dowhilemultiplyByTwoUntilGreaterThan100(num) {

    do {
        num = num * 2;
        console.log(num);
    } while (num < 100)

}

function whilemultiplybyTwoUntilGreaterThan100(num){

    while (num < 100){
        num = num * 2;
        console.log(num);
    }

}

// var userNum = parseInt(prompt("Give me a number under 5 please :)"));
//
// dowhilemultiplyByTwoUntilGreaterThan100(userNum);
// console.log("-----~-----");
// whilemultiplybyTwoUntilGreaterThan100(2);

// For loops: Loops that are designed to run a given number of times. Think more math thinking.
//
// for (var incrementer = 1; incrementer <= 10; incrementer++) {
//     console.log("This loop has run " + incrementer + " time(s).");
// }

// The for loop has more to it as you can see. Let's break down the arguments:

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.

// Once again, we can use this in a function.

// function sayHelloXTimes(num) {
//     for (num; num >= 0; num--) {
//         if (num % 5 === 0) {
//             console.log("Howdy! Our current number is: " + num);
//         } else {
//             console.log("Hello! Our current number is: " + num);
//         }
//     }
//     // return "Hello!";
// }
//
// sayHelloXTimes(18);

// And we can use this with conditionals!
//
// for (var i = 1; i < 25; i++){
//     if (i % 6 == 0) {
//         console.log("Codeup");
//     } else if (i % 2 == 0) {
//         console.log("Code");
//     } else if (i % 3 == 0) {
//         console.log("Up");
//     } else {
//         console.log(i);}
// }

// TODO: Quasar, how would we refactor the above back into a WHILE loop as we saw earlier?

// Below is a funky example that works, but will rely on moving between different data types.
// for (var i = "A"; i.length < 8; i = i + "A") {
//     console.log("This is a bit of a tricky way to run a for loop, but hey, it works. This is what 'i' length looks like: " + i.length);
// }

// BREAK AND CONTINUE: Ways to manipulate the behavior of your loop [stop vs skip]

// We can get a loop to stop using break;

var x = 0;

// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 10) {
//         alert("LambChop, cut it out!!")
//         break;
//     }
// }

// for (var j = 0; j < 100000; j += 5) {
//     if (j === 500) {
//         break;
//     }
//     console.log(j);
// }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.


// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
    for (var i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
    // return x;
}

allOddNumbersToX(17);
// allOddNumbersToX(18);


// The above function will only log the odd numbers until the argument passed.