
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

