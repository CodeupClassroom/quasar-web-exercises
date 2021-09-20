//~*~ Locating individual elements
var topHeader = document.getElementById("top-header");

// console.log(topHeader);


// What happens if there is no result?

var hopTeader = document.getElementById("hop-teader");

// console.log(hopTeader);

//~*~ Locating lists of elements

//Element List - retrieve by CLASS or TAG

var specialOffers = document.getElementsByClassName("special-offer");

// console.log(specialOffers);

var listItems = document.getElementsByTagName("li");

// console.log(listItems);

//Loop through the hatList and print our nodes

// for(var i = 0; i < listItems.length; i++){
//     console.log(listItems[i]);
// }

//~*~ Accessing form input

var currentPlaceholder = document.forms.hatSearch[0].placeholder;

// console.log(currentPlaceholder);

//~*~ Accessing / Modifying Element properties [so I've got a collection of this stuff - what now?]

//Accessing innerHTML
//Instead of printing a list of nodes, let's print some text - What HTML is INSIDE our <li>?

var topSellers = document.getElementsByClassName("hat-sold");

for(var i = 0; i < topSellers.length; i++){

    console.log(topSellers[i].innerHTML);

}

//Modifying innerHTML
//Uh oh - these were last month's top seller, WOOPS -
//let's update our <li> to show "Hat TBD" and let's be STRONG about it!

for(var i = 0; i < topSellers.length; i++){

    topSellers[i].innerHTML = "<strong>Hat TBD</strong>";

}

//innerText vs innerHTML
//"Our Top Sellers" seems odd now as well - let's adjust!

var bestSeller = document.getElementById("best-seller");

bestSeller.innerText = "Will update soon!";


//Perhaps a little EMPHASIS will assist - will innerText help?

bestSeller.innerHTML = "<em>Will update now!</em>";

//Attribute methods: hasAttribute, getAttribute, setAttribute, removeAttribute

//Grab the bottom link:

var bottomLink = document.getElementById("bottom-link");

console.log(bottomLink);

//hasAttribute: return a BOOLEAN if the element has this attribute

console.log(bottomLink.hasAttribute("href")); // expect true

console.log(bottomLink.hasAttribute("style")); // expect false

//getAttribute: what's that attribute's value? [the right side of the equation]

console.log(bottomLink.getAttribute("href"));

//setAttribute: let's change that attribute's value!
bottomLink.setAttribute("href", "https://duckduckgo.com");

bottomLink.setAttribute("class", "bottomLink")

//Accessing or Modifying styles

// demonstrate the BODY as a thing to manipulate - the BODY can be targeted as any other thing:


// Get the body element (notice we need to use index 0 of the array!)
var bodyElement = document.getElementsByTagName("body")[0];

// Change the body background color
// We had to use [] syntax since the property name has a dash

bodyElement.style['background-color'] = "rebeccapurple";


// Replace dashes with camelCase to use standard . syntax
bodyElement.style.backgroundColor = "cornflowerblue";


