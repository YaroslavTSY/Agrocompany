const iconMenu = document.querySelector('.menu__icon');
const headerContacts = document.querySelector('.header__contacts');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		if (window.scrollY >= 1) {
			headerContacts.classList.toggle('__active');
		}
	})
}