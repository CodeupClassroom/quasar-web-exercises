
// AJAX - Asynchronous JavaScript and XML (We aren't going to worry much about the XML part for this course).

// AJAX requests will often employ the use of an API (Application Programming Interface), or JSON file and return us information using JavaScript Object Notation (JSON).

// A JSON object will often look like this:

var obj = {
    "key": "value",
    "number": 45,
    "arr": [1, 2, 3]
};


// Notice that the largest difference is the keys are strings (in double quotes).
// We still interact with this object just the same.
console.log(obj.key);
console.log(obj.number);
console.log(obj.arr);



// ~*~ .ajax and some introductory requests ~*~
// .ajax :: our first API request

// // .ajax(url) - without any OPTIONS, defaults to a GET request:
// $.ajax("https://hookb.in/DrlVEOmnELiPajxxajrY")

// .ajax also has a wealth of options we can use in our efforts as programmers:
// This example: Send out a POST request with some DATA
// $.ajax("https://hookb.in/DrlVEOmnELiPajxxajrY", //URL is still the first argument
//     {
//         type: "POST",
//         data: {
//             cohort: "Quasar",
//             type: "Web Development",
//             yearStarted: 2021
//         }
//     })

//TODO: Before we move on: Let's GET a random recipe together :)
// Help me finish the following AJAX method to console.log the data that comes back!
// https://www.themealdb.com/ < main website url
// https://www.themealdb.com/api.php < api documentation main page (hint: looks like there's some kind of URL beneath the 'lookup a single random meal' heading. . and our AJAX method is looking for a url)

// $.ajax("https://www.themealdb.com/api/json/v1/1/random.php").done(function(data) {
//     console.log(data);
// })

//TODO: Now, craft your own version of the above with an .ajax request


// ~*~ working with responses ~*~


// Asynchronous - be careful presuming your data is coming back with immediacy
//
//Now it's time for a race:
//recipeAPI VS hookbin VS javascriptItself
// $(document).ready(function(){
//
//     console.time("recipeAPI");
//     console.time("javascriptItself");
//     console.time("hookbin");
//
//    $.ajax("https://www.themealdb.com/api/json/v1/1/random.php").done(function(data){
//         // console.log(randomFact)
//         console.timeEnd("recipeAPI");
//     });
//
//     $.ajax("https://hookb.in/DrlVEOmnELiPajxxajrY").done(function(data){
//         console.timeEnd("hookbin")
//     });
//
//     console.timeEnd("javascriptItself");
//
// })

// Different MS = different response times BACK from our API


//~~~ Handling AJAX responses ~~~

// .done - when our process is complete [done], do the following [callback function]
//
// $.ajax("https://www.themealdb.com/api/json/v1/1/random.php").done(function(data, status, jqXhr){
//     alert("AJAX status : " + status);
//
//     console.log("Data returned from server:");
//     console.log(data);
//     // console.log(jqXhr);
// });

// Above, we've used two parameters in our .done callback function: status and data for different purposes


// .done is not our only option to hookup callback functions to:

// .done = when request completed successfully, do this stuff (callback function)
// .fail = when request completed unsuccessfully, do this stuff (callback function)
// .always = always do this stuff (callback function)

// In action:
// function alwaysAlert() {
//     alert("This function always runs!");
// }
//
// $.get("https://www.themealdb.com/api/json/v1/1/random.php") //fire off an AJAX request to "url"
//     .done(function(data, status, jqXhr) {
//         alert("Everything went great! Check out the server's response in the console. Official status " + status);
//         console.log(data);
// })
//     .fail(function(jqXhr, status, error) {
//         alert("There was an error! Check the console for details");
//         console.log("Response status: " + status);
//         console.log("Error object: " + error);
// })
//     .always(alwaysAlert);

//Notice that .done and .fail will run one or the other dependent on the outcome, they are exclusive to each other

//.post shorthand
//
// $.post("https://hookb.in/RZ1XdzNnrGhNb9zzb9wl", //URL is still the first argument
//      {
//             cohort: "Quasar",
//             type: "Web Development",
//             yearStarted: 2021
//         }
//     )


// // Putting our ideas into some motion:
// //Our user wants to CLICK A BUTTON and have a RANDOM RECIPE show to them in the view
// //
$("#rando").click(function(e){
    e.preventDefault();
    $.get("https://www.themealdb.com/api/json/v1/1/random.php").done(function(data, status)
{
    console.log(data.meals[0]) // Stepping into our data. . data > first level ["meals"] at the 0 index > I can see many object properties to get info from

    $("#recipeContainer").html("<h1>" + data.meals[0].strMeal + "</h1>"
        + "<span>" + "Category: " + data.meals[0].strCategory + "</span><br>"
        + "<img src='" + data.meals[0].strMealThumb + "'>"
        + "<h4>Instructions</h4>"
        + "<p>" + data.meals[0].strInstructions + "</p>")

    })
})


// //Our user wants to SEARCH IN A FIELD and have the most RELEVANT RECIPE shown to them in the view
//
    $("#userSearch").click(function (e) {
        e.preventDefault();
        let query = $("#searchValue").val(); // a string that was input
        console.log(query);
        $.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query).done(function (data, status) {
            if(data.meals === null){
                $("#recipeContainer").html("No matches found :/");
            }
            var html = "<h1>" + data.meals[0].strMeal + "</h1>"
                + "<span>" + "Category: " + data.meals[0].strCategory + "</span><br>"
                + "<img src='" + data.meals[0].strMealThumb + "'>"
                + "<h4>Instructions</h4>"
                + "<p>" + data.meals[0].strInstructions + "</p>"
                + "<a href='" + data.meals[0].strSource + "'>Take me to the recipe</a>"
            $("#recipeContainer").html(html);


        })
    })

