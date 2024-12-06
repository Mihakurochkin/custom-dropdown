'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');
const content = dropdown.querySelector('.dropdown__content');

trigger.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('dropdown--active')
})