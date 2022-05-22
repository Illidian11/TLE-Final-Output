let sett = document.getElementById("sett");
let mouseCursor = document.querySelector(".cursor");
let sign = document.getElementById("sign-in");
let buy = document.getElementById("purchase");
let y = document.querySelector(".tips");

function mySettings() {
    if (sett.style.display === "block") {
      sett.style.display = "none";
    } else {
      sett.style.display = "block";
    }
}

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

function myCursor() {
  if (mouseCursor.style.display === "block") {
    mouseCursor.style.display = "none"
  } else {
    mouseCursor.style.display = "block";
  }
}

function myLog() {
  sign.style.display = "block";
}

function myKlose() {
  sign.style.display = "none";
}

function myPrim() {
  buy.style.display = "block";
}
function myClose() {
  buy.style.display = "none";
}

window.onmousemove = function () {
  setTimeout(function (){y.style.display = "none";}, 2000);
}