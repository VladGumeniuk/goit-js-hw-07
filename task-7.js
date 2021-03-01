"use strict";

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", checkFontSize);
function checkFontSize(event) {
  span.style.fontSize = event.target.value + "px";
}
