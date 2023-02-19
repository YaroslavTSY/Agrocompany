// Tabs/active/on click
export const menuList = document.querySelector('.menu__list');
export const navTabs = document.querySelectorAll('.menu__list li');
export const navUnderline = document.querySelector('.menu__underline');
export let mediaQuery768 = window.matchMedia("(min-width: 48em)");

mediaQuery768.addEventListener("change", () => {
	moveUnderline(0, 0, navUnderline);
})

export function moveUnderline(positon, width, underline) {
	let mediaQuery768 = window.matchMedia("(min-width: 48em)");
	underline.style.cssText = 'display: none';
	if (mediaQuery768.matches) {
		underline.style.cssText = `
			left: ${positon}%;
			width: ${width}%;
		`;
	}
}

export function selectPanel(e) {
	let tabItem = e.target.parentElement;
	let offsetPositionPercent = 100 / menuList.offsetWidth * tabItem.offsetLeft;
	let offsetWidthPercent = 100 / menuList.offsetWidth * tabItem.offsetWidth;
	navTabs.forEach(el => el.classList.remove('_active'));
	tabItem.classList.add('_active');
	if (tabItem.className === '_active') {
		moveUnderline(offsetPositionPercent, offsetWidthPercent, navUnderline)
	} else {
		moveUnderline(0, 0, navUnderline);
	}
}
window.addEventListener('scroll', moveUnderline(0, 0, navUnderline));
// navTabs.forEach(el => {
// 	el.addEventListener('mouseover', selectPanel);
// })