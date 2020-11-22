var newso = document.getElementById('news');
var unl = document.getElementById("upnewslink");

function take(taketo) {
  location.replace(taketo);
}
function updatelog() {
  alert('Current Version is 0.263\n~~~~~~~~~UPDATE LOG~~~~~~~~~\n-   Added this page :D game coming soon...\n-   Working on learning plan\n\n')
}
function news(type, always) {
  if(type === "up") {
    if(newso.innerHTML === "" || always === "yes") {
      unl.innerHTML = "Close";
      newso.innerHTML = "Current Version is 0.263<br> <br>~~~~~~~~~UPDATE LOG~~~~~~~~~<br>&bull;   Added this page<br>&bull;   Working on learning plan<br>:D game coming soon...";
      nav("#news", "news")
    } else {
      unl.innerHTML = 'Update News';
      newso.innerHTML = "";
      take("#n");
    }
  }
}
function nav(url, color) {
  if(url != "-none-") {
    take(url);
  }
  if(color != false) {
  if(color === "home") {
    document.getElementById("homelink").style.backgroundColor = "#4CAF50";
    document.getElementById("homelink").style.color = "white";
    document.getElementById("newslink").style.backgroundColor = "";
    document.getElementById("newslink").style.color = "";
    document.getElementById("aboutlink").style.backgroundColor = "";
    document.getElementById("aboutlink").style.color = "";
    document.getElementById("htulink").style.backgroundColor = "";
    document.getElementById("htulink").style.color = "";
    document.getElementById("contactlink").style.backgroundColor = "";
    document.getElementById("contacklink").style.color = "";
  } else if(color === "news") {
    document.getElementById("homelink").style.backgroundColor = "";
    document.getElementById("homelink").style.color = "";
    document.getElementById("newslink").style.backgroundColor = "#4CAF50";
    document.getElementById("newslink").style.color = "white";
    document.getElementById("aboutlink").style.backgroundColor = "";
    document.getElementById("aboutlink").style.color = "";
    document.getElementById("htulink").style.backgroundColor = "";
    document.getElementById("htulink").style.color = "";
    document.getElementById("contactlink").style.backgroundColor = "";
    document.getElementById("contacklink").style.color = "";
  } else if(color === "about") {
    document.getElementById("homelink").style.backgroundColor = "";
    document.getElementById("homelink").style.color = "";
    document.getElementById("newslink").style.backgroundColor = "";
    document.getElementById("newslink").style.color = "";
    document.getElementById("aboutlink").style.backgroundColor = "#4CAF50";
    document.getElementById("aboutlink").style.color = "white";
    document.getElementById("htulink").style.backgroundColor = "";
    document.getElementById("htulink").style.color = "";
    document.getElementById("contactlink").style.backgroundColor = "";
    document.getElementById("contacklink").style.color = "";
  } else if(color === "howtouse") {
    document.getElementById("homelink").style.backgroundColor = "";
    document.getElementById("homelink").style.color = "";
    document.getElementById("newslink").style.backgroundColor = "";
    document.getElementById("newslink").style.color = "";
    document.getElementById("aboutlink").style.backgroundColor = "";
    document.getElementById("aboutlink").style.color = "";
    document.getElementById("htulink").style.backgroundColor = "#4CAF50";
    document.getElementById("htulink").style.color = "white";
    document.getElementById("contactlink").style.backgroundColor = "";
    document.getElementById("contacklink").style.color = "";
  } else if(color === "contact") {
    document.getElementById("homelink").style.backgroundColor = "";
    document.getElementById("homelink").style.color = "";
    document.getElementById("newslink").style.backgroundColor = "";
    document.getElementById("newslink").style.color = "";
    document.getElementById("aboutlink").style.backgroundColor = "";
    document.getElementById("aboutlink").style.color = "";
    document.getElementById("htulink").style.backgroundColor = "";
    document.getElementById("htulink").style.color = "";
    document.getElementById("contactlink").style.backgroundColor = "#4CAF50";
    document.getElementById("contacklink").style.color = "white";
  }
  }
}