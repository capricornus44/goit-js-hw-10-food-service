import './css/style.css';

//==================== MENU MARKUP CREATING ====================
import menuElemsTmpl from './template/menu-elems.hbs';
import menuElems from './menu.json';

const menuContainer = document.querySelector('.js-menu');

const menuCardsMarkup = menuElemsTmpl(menuElems);

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);

//==================== PAGE THEME CHANGING ====================
const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');

themeSwitchToggle.addEventListener('change', onToggleClick);

function onToggleClick() {
  changeTheme(Theme.LIGHT, Theme.DARK);
}

function changeTheme(oldTheme, newTheme) {
  if (themeSwitchToggle.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// function onSwitchTheme(event) {
//   if (event.target.checked) {
//     document.body.classList.add(Theme.DARK);
//     document.body.classList.remove(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     document.body.classList.add(Theme.LIGHT);
//     document.body.classList.remove(Theme.DARK);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

const theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  themeSwitchToggle.checked = true;
  document.body.classList.add(Theme.DARK);
} else {
  document.body.classList.add(Theme.LIGHT);
}
