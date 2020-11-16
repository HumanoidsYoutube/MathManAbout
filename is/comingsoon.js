var head = document.getElementById("h1");
var sub = document.getElementById("h2");
var link = document.getElementById("link");

function load() {
    var cookie = checkCookie();
    if(cookie === "yes") {
    location.replace("")
        setCookie("newload", "clear", )
    }
}

function back() {
    head.style.color = "white";
    sub.style.color = 'white';
    link.innerHTML = '';
    document.getElementById("b").style.backgroundColor = 'white';
    location.replace("#h1")
    setTimeout(function(){location.replace("javascript:window.history.back()");}, 1000)
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("newload");
    if (user != "" && user != null && user != "clear") {
      setCookie("newload", "yes", 0.01);
      return "yes";
    }else{
      return "no";
    }
  }
}