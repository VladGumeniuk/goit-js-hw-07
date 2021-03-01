"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const checkUl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(elem => {
  const createLi = document.createElement("li");
  createLi.textContent = elem;
  fragment.appendChild(createLi);
});

checkUl.appendChild(fragment);
