var button1 = $("#btn1");
var button2 = $("#btn2");

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

//hover even
$("p").hover(function () {
    $("p").css("background-color", "rebeccapurple")
},
    function(){
        $("p").css("background-color", "inherit")
    })