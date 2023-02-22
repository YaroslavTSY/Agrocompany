// Tabs/active/on click
const mediaQuery768 = window.matchMedia("(min-width: 48em)");

function setupListenersTabs() {
	mediaQuery768.addEventListener("change", () => {
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

		if (mediaQuery768.matches) {
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
	console.log(event, event.target);
	event.target.classList.add('_active');
}
export function initTabs() {
	setupListenersTabs();
}