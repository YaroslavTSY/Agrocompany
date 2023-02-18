import { addClass, removeClass } from "./functions.js";

const mainHeader = document.querySelector('.header');
const menuBody = document.querySelector('.menu__body');
export const headerContacts = document.querySelector('.header__contacts');
const offerBtn = document.querySelector('.offer__btn');

const headerScrollChange = mainHeader.clientHeight;


window.addEventListener('scroll', function () {
	let scrollpos = window.scrollY;
	let mediaQuery576 = window.matchMedia("(min-width: 36em)")
	if (scrollpos >= headerScrollChange) {
		addClass(menuBody, 'scroll');
	}
	else {
		removeClass(menuBody, 'scroll');
	};

	if (scrollpos >= 1) {
		removeClass(headerContacts, '__active');
		addClass(offerBtn, '__active');
	} else if (mediaQuery576.matches) {
		addClass(headerContacts, '__active');
		removeClass(offerBtn, '__active');
	}
})


