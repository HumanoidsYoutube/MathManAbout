var head = document.getElementById("h1");
var sub = document.getElementById("h2");
var link = document.getElementById("link");


function back() {
    head.style.color = "white";
    sub.style.color = 'white';
    link.innerHTML = '';
    document.getElementById("b").style.backgroundColor = 'white';
    location.replace("#h1")
    setTimeout(function(){window.history.back()}, 1000)
}