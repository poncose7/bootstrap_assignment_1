//var header = document.getElementById("hello");
//var header = document.getElementsByClassName("abc");
//var header = document.getElementsByTagName("p");
//var header = document.querySelector(".jumbotron a");
//header.textContent = "changed"

//for(var i =0; i<header.length; i++){
//    header[i].textContent = "changed";
//}



//header.textContent = "The content is changed";


function runEvent(){
var header = document.querySelector(".jumbotron h1");
header.textContent = "changed"
}

var btn = document.querySelector(".jumbotron a");
btn.addEventListener("mouseout",runEvent);