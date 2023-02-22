// Change class "_active" for Nav on Scroll to Section //
import { moveUnderlineTabs } from "./navTabs.js";

// function callback
const links = document.querySelectorAll('.menu__link');
const callback = (entries) => {
	links.forEach((link) => link.parentElement.classList.remove('_active'));
	const elem = entries.find((entry) => entry.isIntersecting);
	if (elem) {
		const index = sections.findIndex((section) => section === elem.target);
		let linkSelected = links[index].parentElement;
		linkSelected.classList.add('_active');
		moveUnderlineTabs();
	}
}

// observer
let observer = new IntersectionObserver(callback, {
	rootMargin: '0px',
	threshold: 0.6
});

// Lunch the function
const sections = [...document.querySelectorAll('.to-scrolling')];
sections.forEach((section) => observer.observe(section));
