"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listForAddingItems = document.querySelector(`#ingredients`);

const addListItems = (array) => {
    const listArray = array.map(elem => {
        const createLi = document.createElement('li');
        createLi.textContent = elem;
        return createLi;
    })
    listForAddingItems.append(...listArray);
}

addListItems(ingredients);