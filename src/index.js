import './styles.css';
import menu from './menu.json';
import menuItem from './menu-items.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuList = document.querySelector('.js-menu');

function createMenu(items) {
  return items.reduce((acc, item) => (acc += menuItem(item)), '');
}
menuList.insertAdjacentHTML('beforeend', createMenu(menu));

let settings = localStorage.getItem('theme');
const switchControl = document.querySelector('input.js-switch-input');

function loadDarkTheme(settings) {
  if (settings === 'dark') {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    switchControl.checked = true;
  }
}
loadDarkTheme(settings);

function onClick(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    settings = localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    settings = localStorage.setItem('theme', 'light');
  }
}
switchControl.addEventListener('change', onClick);