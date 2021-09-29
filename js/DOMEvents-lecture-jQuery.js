var button1 = $("#btn1");
var button2 = $("#btn2");

//keyboard global
var myKeys = "";

//click event
button1.click(function (e) {
    alert("Button 1 clicked");
    $("p").css("background-color", "rebeccapurple");
    alert("Paragraphs are now purple 8)");
})

//dblclick event

button2.dblclick(function () {
    alert("Button 2 double clicked")
})

//hover event
$("p").hover(function () {
        $("p").css("background-color", "rebeccapurple")
    },
    function () {
        $("p").css("background-color", "inherit")
    })

//keydown
// $("body").keydown(function (event){
//     console.log(event.key);
// })

//keypress
// $("body").keypress(function (event){
//     console.log(event.key);
// })

//keyup
$("body").keyup(function (event){
    console.log("The key you pressed was: "+ event.key);
    myKeys += event.key;
    console.log(myKeys);
    //if my user types 'quasar'> do a cool thing
    if(myKeys === "quasar"){
        alert("coooooool thing 8)")
    }
})