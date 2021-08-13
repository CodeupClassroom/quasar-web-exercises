"use strict";

(function () {
    console.log('Welcome to functions!');

//Define named functions
    function sayHello() {
        console.log('Hello!');
    }

    console.log('In the file after creating the sayHello function.');

    sayHello();

//Define an anonymous function
    var sayHowdy = function () {
        console.log('Howdy!');
    }

    sayHowdy();

//Arguments and Parameters
    function add(x, y) {
        return x + y;
    }

    console.log('add(2,3) ' + add(2, 3));

    function subtract(x, y) {
        return x - y;
    }

// Scope
    var instructor = "Douglas";
    var day = "Friday";

    function tellTheDay() {
        return "Tell " + instructor + " it's " + day + "!";
    }

    function greeting() {
        var username = "Kenneth";
        return "Hi, " + username;
    }

    console.log(greeting());

//console.log(username);

    function checkDay() {
        var day = "Monday";
        return day;
    }

    console.log("It's " + checkDay());
    const PI = 3.14159;

    function overrideGlobal() {
        var PI = 5;

        console.log('Logging out the local version of PI ' + PI);
    }

    overrideGlobal();
    console.log(PI);
})();











