
// Why pay a fortune teller when you can just program your fortune yourself?

//     Write a function named tellFortune that:
//         takes 4 arguments: number of children, partner's name, geographic location, job title.


//         Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


//     Call that function 3 times with 3 different values for the arguments.

// Warm-up through. . 9:20


//function named tellFortune
//4 arguments = 4 parameters (numChildren, partnerName, geoLocation, jobTitle)
//"Hey, you will live in geoLocation working as a jobtitle with numChildren kids and married to partnerName"

function tellFortune(numChildren, partnerName, geoLocation, jobTitle){

    var output = "You will have " + numChildren + " children and work as a " + jobTitle + " living in " + geoLocation + " married to your wonderful partner " + partnerName;


    return output;

}


tellFortune(3, "Douglas", "the compound", "drone commanders")


// You know how old your dog is in human years, but what about dog years? Calculate it!

//     Write a function named calculateDogAge that:
//        * takes 1 argument: your puppy's age.
//        * calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//        * outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
//     Call the function three times with different sets of values.


//     Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.

//function calculateDogAge
// 2 parameters: my puppy's age and a conversion rate to human years
// output : return a formatted string

function calculateDogAge(puppyAge, conversionNum){

    var ageInHumanYears = puppyAge * conversionNum;

    return "Hello there! This little dawg is " + ageInHumanYears + " years old. Nice! I arrived at that number by multiplying your dog's age of " + puppyAge + " with a converter of " + conversionNum;

}

// TACO TUESDAY

// Given arrays of strings that are orders of food in string form to your function, write a function named tacoTuesday that returns TRUE or FALSE if the array provided has any element mention the word 'taco' in its value.

var hasTacos = ["blueberry muffin", "banana", "yogurt", "cereal", "brisket and egg taco"]

var noTacos = ["parfait", "omlette de frumage", "protein shake", "fasting"]

tacoTuesday(hasTacos) //true
tacoTuesday(noTacos) //false

//hint: String.includes() might be useful here. . combined with some kind of iterating structure? Something that might be able to go through each part of our array?. .

function tacoTuesday(arr){

    //arrays have length < use that for my loop
    //a FOR loop is good for set numbers of iterations
    for(var i = 0; i < arr.length; i++){

        //as we go through the array: check the element to see if it has the word 'taco'
        if(arr[i].includes("taco")){
            //return true if you find a taco :)
            return true;
        }


    }
    //no tacos found - return false
    return console.log("Did we find tacos?" + false);

}

// Write a function logEvens that will accept a number parameter as an argument - that number will indicate the amount of times to print out all even numbers up to the argument provided.

// function logEvens(10)//2
//4
//6
//8
//10

function logEvens(num){

    for (var i = 0; i <= num; i++){

        if(i % 2 === 0 && i !== 0){
            console.log(i);
        }

    }

}

function logNum(num){

    for (var i = 0; i <= num; i++){
        if(i === 0){
            console.log("Zero was first recorded in Mesopotamia :D")
        } else if (i % 2 === 0){
            console.log(i + " is an even number");
        } else if (i % 2 === 1 ){
            console.log(i + " is an odd number");
        } else {
            console.log(i + " is something o_O")
        }
    }

}



logNum(10)
logNum(100)

// A warmup that might take a little research:
//
//     So we've seen this dt property come up with some numbers in our work yesterday -
//
// "dt": 1618317040
//
// Would you be able to write me a function named convertDateTime() - convertDateTime will take in a single num parameter along the lines of the property above [1618317040].
//
//     convertDateTime will return a form with human readable meaning - a date with a distinct month / year and perhaps other information.
//
//

var thisMorning = 1633702800;

function convertDateTime(dtNum){

    var dtInMs = dtNum * 1000; //seconds * 1000 = our milliseconds

    var dateObj = new Date(dtInMs); //pass in milliseconds to Date(constructor)

    return dateObj.toLocaleString();

}
