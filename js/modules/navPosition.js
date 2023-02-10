
const mainHeader = document.querySelector('.header');
const menuBody = document.querySelector('.menu__body');
const menuBodyAddClass = () => menuBody.classList.add("scroll");
const menuBodyRemoveClass = () => menuBody.classList.remove("scroll");

const headerContacts = document.querySelector('.header__contacts');
const offerBtn = document.querySelector('.offer__btn');
export const headerContactsAddClass = () => headerContacts.classList.add("__active");
const headerContactsRemoveClass = () => headerContacts.classList.remove("__active");

const headerScrollChange = mainHeader.clientHeight;

window.addEventListener('scroll', function () {
	let scrollpos = window.scrollY;
	let mediaQuery576 = window.matchMedia("(min-width: 36em)")

	if (scrollpos >= headerScrollChange) { menuBodyAddClass() }
	else { menuBodyRemoveClass() };

	if (scrollpos >= 1) {
		headerContactsRemoveClass();
		offerBtn.classList.add("__active");
	} else if (mediaQuery576.matches) {
		headerContactsAddClass();
		offerBtn.classList.remove("__active");
	}
})