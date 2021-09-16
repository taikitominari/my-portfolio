'use strict';

const openBtn = document.getElementById('open_btn');
const shadow = document.getElementById('shadow');

openBtn.addEventListener('click', () => {
  document.body.classList.add('open_menu');
});
shadow.addEventListener('click', () => {
  document.body.classList.remove('open_menu');
});

const menuItem = document.getElementsByClassName('menu_item');
const itemArray = Array.from(menuItem);

itemArray.forEach(function(item) {
  item.addEventListener('click', () =>{
    document.body.classList.remove('open_menu');
  });
});

window.addEventListener('resize', () => {
  document.body.className = '';
});