//If + if else dealing with "is it Sunny?" and "do I have sunscreen?"

// var isSunny = confirm("Is it sunny outside today?");
// var haveSunscreen = confirm("Did you remember your sunscreen?");

// if (isSunny && haveSunscreen) {
//     //do some stuff
//     alert("Don't forget some sunscreen!");
// } else {
//     alert("Well, hopefully it's not too sunny for you out there");
// }

//Refactor livecode for question about functions:

function uvAlert(){

    var isSunny = confirm("Is it sunny outside today?");
    var haveSunscreen = confirm("Did you remember your sunscreen?");

    if (isSunny && haveSunscreen) {
        //do some stuff
        alert("Don't forget some sunscreen!");
    } else {
        alert("Well, hopefully it's not too sunny for you out there");
    }

}

//Adding in an else-if:

// var isSunny = confirm("Is it sunny outside today?");
// var haveSunscreen = confirm("Did you remember your sunscreen?");
//
// if (isSunny && haveSunscreen) {
//     //With condition 1 being true, do the following:
//     alert("Great! You brought sunscreen, don't forget to apply!");
// } else if (isSunny && !haveSunscreen){
//     //With condition 1 being false. . IF condition 2 is true:
//     alert("Ahh man - be careful! It's a sunny day out there!");
// } else {
//     alert("Well, hopefully it's not too sunny for you out there overall and you'll be alright");
// }

//If, else-if, else - syntax and example with literal bools to demonstrate

// if (false) {
//     //execute if condition 1 is true
//     alert("Condition 1 was true");
// } else if (false) {
//     //execute if condition 2 is true
//     alert("Condition 2 was true");
// } else {
//     //execute if all above conditions do not evaluate to true
//     alert("All other conditions failed to evaluate to true - this is our else clause speaking to us!");
// }

//If, else-if, else w/ strings + refactor into a function

// function trafficColor(){
//
//     var userTrafficLight = prompt("What color is the traffic light?");
//
//     userTrafficLight = userTrafficLight.toLowerCase();
//
//     if(userTrafficLight === "red"){
//
//         var isBlinking = confirm("Uh oh - is the red light blinking?");
//
//         if(isBlinking){
//            //Nested conditional to trigger IF condition 1 is true. . AND this condition is true
//            alert("If the red light is blinking, treat it like a stop sign and be cautious");
//        } else {
//             alert("Okay - is it was blinking, that would be a different story.")
//         }
//
//         alert("Stop! Alto! Halt! Caution! Red light");
//     } else if (userTrafficLight === "yellow") {
//         alert("Slow down! If in the intersection, proceed through!");
//     } else if (userTrafficLight === "green") {
//         alert("Green light, continue through following the other laws of the road!");
//     } else {
//         alert("Uh oh - be aware of your surroundings if the traffic light looks a little off!")
//     }
//
// }

// trafficColor();

//If/else before a ternary

// if(false){
//     //execute if condition is true
//     console.log("It is a sunny day outside");
// } else {
//     //execute if condition is false
//     console.log("It is not a sunny day outside");
// }

//Rewrite the above as a ternary
//
// var isSunny = "not so sunny";
//
// (isSunny === "sunny") ? console.log("This is a ternary: It is sunny outside!") : console.log("This is a ternary: It is NOT sunny outside :(");

var userTrafficLight = prompt("What color is the traffic light?");

    userTrafficLight = userTrafficLight.toLowerCase();

    switch (userTrafficLight) {
        case "red":
            alert("Stop! Alto! Halt! Caution! Red light");
            break;
        case "yellow":
            alert("Slow down! If in the intersection, proceed through!");
            break;
        case "green":
            alert("Green light, continue through following the other laws of the road!");
            break;
        default:
            alert("Uh oh - be aware of your surroundings if the traffic light looks a little off!")
            // break;
    }
