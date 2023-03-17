import { minWidth768 } from "./definition.js";

// Tabs/active/on click
function setupListenersTabs() {
	minWidth768.addEventListener("change", () => {
		moveUnderlineTabs();
	});
	const navTabs = document.querySelectorAll('.menu__list li');
	navTabs.forEach(el => {
		el.addEventListener('click', () => {
			selectPanelTabs();
			moveUnderlineTabs();
		});
	});
}

export function moveUnderlineTabs() {
	const menuList = document.querySelector('.menu__list');
	const navUnderline = document.querySelector('.menu__underline');
	let navTabActive = document.querySelector('.menu__list li._active');

	if (navTabActive) {
		let linkOffsetLeft = (100 / menuList.offsetWidth * navTabActive.offsetLeft);
		let linkOffsetWidth = (100 / menuList.offsetWidth * navTabActive.offsetWidth);

		if (minWidth768.matches) {
			navUnderline.style.cssText = `
				left: ${linkOffsetLeft}%;
				width: ${linkOffsetWidth}%;
			`;
		}
	}
}
export function selectPanelTabs() {
	const navTabs = document.querySelectorAll('.menu__list li');
	navTabs.forEach(el => {
		el.classList.remove('_active');
	});
	e.target.classList.add('_active');
}
export function initTabs() {
	setupListenersTabs();
}