import { toggleClass } from "./functions.js";

const iconMenu = document.querySelector('.menu__icon');
const headerContacts = document.querySelector('.header__contacts');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		let mediaQuery576 = window.matchMedia("(min-width: 36em)");
		if (window.scrollY >= 1) {
			toggleClass(headerContacts, '__active');
		} else if (!mediaQuery576.matches) {
			toggleClass(headerContacts, '__active');
		}
	})
}