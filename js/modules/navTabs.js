// Tabs/active/on click
export const menuList = document.querySelector('.menu__list');
export const navTabs = document.querySelectorAll('.menu__list li');
export const navUnderline = document.querySelector('.menu__underline');
let mediaQuery768 = window.matchMedia("(min-width: 48em)");

mediaQuery768.addEventListener("change", () => {
	moveUnderline();
})

export function moveUnderline() {
	const menuBody = document.querySelector('.menu__body');
	const navUnderline = document.querySelector('.menu__underline');
	let navTabActive = document.querySelector('.menu__list li._active');

	if (navTabActive) {
		let linkOffsetLeft = (100 / menuBody.offsetWidth * navTabActive.offsetLeft);
		let linkOffsetWidth = (100 / menuBody.offsetWidth * navTabActive.offsetWidth);
		let mediaQuery768 = window.matchMedia("(min-width: 48em)");
		// navUnderline.style.cssText = 'display: none';
		if (mediaQuery768.matches) {
			navUnderline.style.cssText = `
				left: ${linkOffsetLeft}%;
				width: ${linkOffsetWidth}%;
			`;
		}
	}
}
export function selectPanel() {
	const navTabs = document.querySelectorAll('.menu__list li');
	navTabs.forEach(el => {
		el.classList.remove('_active');
		el.addEventListener('click', () => el.classList.add('_active'));
	});
}
navTabs.forEach(el => {
	el.addEventListener('click', () => {
		selectPanel;
		moveUnderline;
	});
})