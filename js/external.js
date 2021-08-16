// "use strict";
//
// console.log("Hello from External JS!");
// var myStr = 45;
//
// // console.log(myStr)
//
//
// // alert("Hey, this is my alert :)")
// // var userConfirm = confirm("Do you want to remain logged in?")
// //
// // alert("The user selected: " + userConfirm)
//
// var userLunch = prompt("What did you have for lunch?")
//
// alert("The user had " + userLunch + " for lunch!")

// console.log("This is external JS, please leave me alone");

// alert("Welcome to my Website!");
//
// var userFavorite = prompt("Hey, what's up! What's your favorite color?");
//
// alert(userFavorite + "? Wow! That is EXACTLY MY FAVORITE TOO!");

//Exercise 3 refactor:
//TODO: Complete exercise 3 from the previous lesson, when the exercise asks you to use a number, instead use a prompt to ask the user for that number. Use an alert to show the results of each problem.

//Could be our original idea [before refactor]:
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;

var pricePerDay = 3;

console.log("Hey, you owe : $" + (littleMermaid * pricePerDay) + " for renting the little mermaids");

//Let's refactor with some user interaction

// var daysRented = prompt("Thanks for using Quasar Rental Services - how many days did you rent your feature?");
//
// alert("$" + (daysRented * 3) + " is how much you owe for your rental");

//TODO: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//productQuantity > 2 || !offerExpired
//premiumMem === true, offer still needs to be valid

//Before refactor:
// var productQuantity = 1;
// var offerValid = false;
// var isPremiumMem = true;
//
// console.log("Customer qualifies for offer? " + ((productQuantity > 2 || isPremiumMem) && offerValid));

var productQuantity = prompt("How many items are in your cart?");
var isPremiumMem = confirm("Do you have your premium membership card?");
var offerValid = confirm("Did we have a discount offer going on today?");


alert("Customer qualifies for offer? " + ((productQuantity > 2 || isPremiumMem) && offerValid));

