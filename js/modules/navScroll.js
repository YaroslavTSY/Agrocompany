// Change class "_active" for Nav on Scroll to Section //
// function callback
import * as navTabs from './navTabs.js';
const links = document.querySelectorAll('.menu__link');
const callback = (entries) => {
	links.forEach((link) => link.parentElement.classList.remove('_active'));
	const elem = entries.find((entry) => entry.isIntersecting);
	if (elem) {
		const index = sections.findIndex((section) => section === elem.target);
		let linkSelected = links[index].parentElement;
		let linkOffsetLeft = (100 / navTabs.menuList.offsetWidth * linkSelected.offsetLeft);
		let linkOffsetWidth = (100 / navTabs.menuList.offsetWidth * linkSelected.offsetWidth);
		linkSelected.classList.add('_active');
		navTabs.moveUnderline(linkOffsetLeft, linkOffsetWidth, navTabs.navUnderline);
	}
}

// observer
let observer = new IntersectionObserver(callback, {
	rootMargin: '0px',
	threshold: 0.5
});

// Lunch the function
const sections = [...document.querySelectorAll('.to-scrolling')];
sections.forEach((section) => observer.observe(section));
