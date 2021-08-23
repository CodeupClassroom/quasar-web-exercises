"use strict";

// Create a while loop that uses console.log()
// to create the output shown below.
// 2
// 4
// 8
// 16
// ...

function timesTwo() {
  var num = 2;

  while (num <= 65536) {
    num *= 2;
    console.log(num);
  }
}

// An ice cream seller can't go home until she sells
// all of her cones.

// First write enough code that generates a random number
// between 50 and 100 representing the amount of cones
// to sell before you start your loop.

// Inside of the loop your code should generate another
// random number between 1 and 5, simulating the
// amount of cones being bought by her clients.

// Use a do-while loop to log to the console the
// amount of cones sold to each person.

function iceCreamPrompt() {
  // Random Formula (Exclusive of max):
  // Math.floor(Math.random() * (max - min)) + min
  var allCones = Math.floor(Math.random() * 51) + 50;
  var userCones;

  do {
    // The `+` before prompt coerces the returned string
    // into a number, just like Number()
    userCones = +prompt(
      "There are " + allCones + " cones left. How many cones would you like?"
    );

    // You might also consider one of the following instead:
    // userCones = Number(userCones);
    // userInput = parseInt(userCones);

    if (isNaN(userCones) || userCones < 1) {
      alert("Sorry, That's not a valid input!");
      continue;
    }

    if (userCones > allCones) {
      alert(
        "Sorry! I can't sell you " +
          userCones +
          " cones, I only have " +
          allCones +
          "."
      );
      continue;
    }

    allCones -= userCones;
  } while (allCones > 0);

  alert("Yay! I sold them all!");
}

function iceCreamRand() {
  // Random Formula (Exclusive of max):
  // Math.floor(Math.random() * (max - min)) + min
  var allCones = Math.floor(Math.random() * 51) + 50;

  do {
    var randCones = Math.floor(Math.random() * 5) + 1;

    if (randCones > allCones) {
      console.log(
        "Sorry! I can't sell you " +
          randCones +
          " cones, I only have " +
          allCones +
          "."
      );
      continue;
    }

    allCones -= randCones;
    console.log(randCones + " cones sold...");
  } while (allCones > 0);

  console.log("Yay! I sold them all!");
}
