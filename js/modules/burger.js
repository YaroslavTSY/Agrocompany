import { minWidth576 } from "./definition.js";

const iconMenu = document.querySelector('.menu__icon');
const headerContacts = document.querySelector('.header__contacts');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.documentElement.classList.toggle('lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		if (window.scrollY >= 1) {
			headerContacts.classList.toggle('__active');
		} else if (!minWidth576.matches) {
			headerContacts.classList.toggle('__active');
		}
	})
}