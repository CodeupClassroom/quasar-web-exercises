var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

var rebeccaPurple = function (){
    // alert("Hello Quasar!");

    var listItems = document.getElementsByTagName("li");

    for(var i = 0; i < listItems.length; i++){
        listItems[i].style.backgroundColor = "rebeccapurple";

    }
}

button1.addEventListener("click", rebeccaPurple)




button2.addEventListener("click", function(){

    button1.removeEventListener("click", rebeccaPurple)

})


