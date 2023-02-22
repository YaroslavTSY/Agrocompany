const mainHeader = document.querySelector('.header');
const menuBody = document.querySelector('.menu__body');
export const headerContacts = document.querySelector('.header__contacts');
const offerBtn = document.querySelector('.offer__btn');

const headerScrollChange = mainHeader.clientHeight;


window.addEventListener('scroll', function () {
	let scrollpos = window.scrollY;
	let mediaQuery576 = window.matchMedia("(min-width: 36em)");
	if (scrollpos >= headerScrollChange) {
		menuBody.classList.add('scroll');
	}
	else {
		menuBody.classList.remove('scroll');
	};
	if (scrollpos >= 1) {
		headerContacts.classList.remove('__active');
		offerBtn.classList.add('__active');
	} else if (mediaQuery576.matches) {
		headerContacts.classList.add('__active');
		offerBtn.classList.remove('__active');
	}
	if (!document.querySelector('.menu__list li._active')) {
		document.querySelector('.menu__underline').style.width = '0';
	}
})


