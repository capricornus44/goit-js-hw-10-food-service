import './css/styles.css';

//==================== MENU MARKUP CREATING ====================
import menuElemsTmpl from './template/menu-elems.hbs';
import menuElems from './menu.json';

const menuContainer = document.querySelector('.js-menu');

const menuCardsMarkup = menuElemsTmpl(menuElems);

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);

//==================== PAGE THEME CHANGING ====================
const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

themeSwitchToggle.addEventListener('change', onSwitchTheme);

function onSwitchTheme(event) {
  if (event.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  themeSwitchToggle.checked = true;
  body.classList.add(Theme.DARK);
} else {
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
}
