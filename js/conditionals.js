"use strict";
console.log("Connecting test");
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     var message;
//
//     if (color === "blue") {
//         message = "blue is the color of the sky";
//     } else if (color === "red") {
//         message = "Strawberries are red";
//     } else if (color === "cyan"){
//         message = "I don't know anything about " + color;
//     } else {
//         message = "That's an interesting color!";
//     }
//
//     return message;
// }
//
// console.log(analyzeColor('blue'));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    var message;

    switch (color) {
        case "blue":
            message = "blue is the color of the sky";
            break;
        case "red":
            message = "Strawberries are red";
            break;
        case "cyan":
            message = "I don't know anything about cyan";
            break;
        default:
            message = "That is an interesting color";
            break;
    }

    return message;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("What is your favorite color?");
// var result = analyzeColor(userColor);
// alert(result);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(number, totalAmount) {
    var price;

    switch (number) {
        case 0:
            price = totalAmount;
            break;
        case 1:
            price = totalAmount - totalAmount * .1;
            break;
        case 2:
            price = totalAmount - totalAmount * .25;
            break;
        case 3:
            price = totalAmount - totalAmount * .35;
            break;
        case 4:
            price = totalAmount - totalAmount * .5;
            break;
        case 5:
            price = 0;
            break;
    }

    return price;
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

// var totalBill = prompt("What is your total bill?");
// var pay = calculateTotal(luckyNumber, totalBill);
//
// alert("Hello, your lucky number is " + luckyNumber);
// alert("The price before the discount was $" + totalBill);
// alert("Congrats, your price after discount is $" + pay);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var isEnter = confirm("Would you like to enter a number?");

// if (isEnter === true) {
//     var userNumber = prompt("Great, please enter a number.");
//
//     if (isNaN(userNumber) === true) {
//         alert("Hey!! That was not a NUMBER!!!");
//     } else {
//         if (userNumber % 2 === 0) {
//             alert("This is an even number.");
//         } else {
//             alert("This is an odd number.");
//         }
//
//         userNumber = parseInt(userNumber);
//         var plusHundred = userNumber + 100;
//         alert(userNumber + " plus 100 is " + plusHundred);
//
//         if (userNumber > 0) {
//             alert(userNumber + " is positive.");
//         } else if (userNumber < 0) {
//             alert(userNumber + " is negative.");
//         } else {
//             alert("0 is not positive nor negative.");
//         }
//     }
//
// }

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function addHundred(number) {
    return number + 100;
}

function isPositive(number) {
    if (number === 0) {
        return "not positive nor negative";
    } else if (number > 0) {
        return true;
    } else {
        return false;
    }
}

function isString(number) {
    if (isNaN(number) === true) {
        return true;
    } else {
        return false;
    }
}

if (isEnter) {
    var userNumber = prompt("Great, please enter a number.");
    if (isString(userNumber)) {
        alert("Hey!! That was not a NUMBER!!!");
    } else {
        userNumber = Number(userNumber);
        if (isEven(userNumber)) {
            alert(userNumber + " is even.");
        } else {
            alert(userNumber + " is odd.");
        }

        var plusHundred = addHundred(userNumber);
        alert(userNumber + " plus 100 is " + plusHundred);
        if (isPositive(userNumber) === "not positive nor negative") {
            alert (userNumber + " is " + isPositive(userNumber));
        } else if (isPositive(userNumber)){
            alert(userNumber + " is positive.");
        } else {
            alert(userNumber + " is negative.");
        }
    }
}