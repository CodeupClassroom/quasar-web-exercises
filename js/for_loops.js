"use strict";

// Create a function named showMultiplicationTable
// that accepts a number and console.logs the
// multiplication table for that number.
// (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
  for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}

// Use a for loop and the code from the previous lessons
// to generate 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even.

function randomNumsOddEven() {
  for (var i = 0; i < 10; i++) {
    // Random Formula:
    // Math.floor(Math.random() * (max - min)) + min
    var randNum = Math.floor(Math.random() * 180) + 20;
    var oddOrEven = randNum % 2 == 0 ? "even" : "odd";
    console.log(randNum + " is " + oddOrEven);
  }
}

// Create a for loop that uses console.log
// to create the output shown below.
// 1
// 22
// 333
// ...

function numTriangle() {
  for (var i = 1; i < 10; i++) {
    var output = "";

    for (var j = 0; j < i; j++) {
      output += i;
    }

    console.log(output);
  }

  // Or...

  for (let i = 1; i < 10; i++) {
      console.log(i.toString().repeat(i));
  }
}

// Create a for loop that uses console.log
// to create the output shown below.
// 100
// 95
// 90
// ...

function downByFive() {
  for (var i = 100; i > 0; i -= 5) {
    console.log(i);
  }
}
