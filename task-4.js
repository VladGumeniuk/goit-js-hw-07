"use strict";

let counterValue = 0;
let checkValue = document.querySelector("#value");

function increment() {
  counterValue = counterValue + 1;
  checkValue.textContent = counterValue;
}

function decrement() {
  counterValue = counterValue - 1;
  checkValue.textContent = counterValue;
}

const firstBtn = document.querySelector(' button[data-action="decrement"]');
const secondBtn = document.querySelector(' button[data-action="increment"]');

firstBtn.addEventListener("click", decrement);
secondBtn.addEventListener("click", increment);
