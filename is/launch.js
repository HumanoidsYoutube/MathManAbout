var un = document.getElementById('upnews');

function replace(url) {
  location.replace(url);
}
function updatelog() {
  alert('Current Version is 0.263\n~~~~~~~~~UPDATE LOG~~~~~~~~~\n-   Added this page :D game coming soon...\n-   Working on learning plan\n\n')
}
function news(news) {
  if(news === "up") {
    if(un.innerHTML === "") {
      un.innerHTML = "Current Version is 0.263<br> <br>~~~~~~~~~UPDATE LOG~~~~~~~~~<br>&bull;   Added this page<br>&bull;   Working on learning plan<br>:D game coming soon...";
      replace("#upnews");
    } else {
      un.innerHTML = "";
    }
  }
}