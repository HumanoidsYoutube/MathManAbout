var title = document.getElementById("title");
var head = document.getElementById("h1");
var sub = document.getElementById("h2");

function back() {
    head.style.color = "white";
    sub.style.color = 'white';
    document.getElementById("b").style.backgroundColor = 'white';
    setTimeout(function(){window.history.back();}, 1000)
}