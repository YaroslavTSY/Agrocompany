import * as functions from "./modules/functions.js";
import * as navTabs from "./modules/navTabs.js";
import * as navPosition from "./modules/navPosition.js";
import * as navScroll from "./modules/navScroll.js";
import * as burger from "./modules/burger.js";
import * as tabToSection from "./modules/tabToSection.js";
import * as showAboutText from "./modules/showAboutText.js";
import * as productsTabs from "./modules/tabsProducts.js"
import * as sliders from "./modules/sliders.js";

functions.isWebp();

let oldIE = false;

if (oldIE) {
	functions.ie7();
}

// Navigation //
navTabs

// Change positon Nav Menu on Scroll
navPosition

//

burger

// Scroll to section on click Tab //
tabToSection


// Show/Hide more text in section About, imported from showAboutText.js
showAboutText

// ! Products Tab's imported from tabsProducts.js//
productsTabs


window.onload = function () {
	document.getElementById('hideAll').classList.add('__active');
	let mediaQuery576 = window.matchMedia("(min-width: 36em)");
	if (mediaQuery576.matches) {
		navPosition.headerContactsAddClass();
	}
	// Change class "_active" for Nav on Scroll to Section
	navScroll

	// Swiper-sliders imported from sliders.js
	sliders.docsSlider;
	sliders.gallerySlider;
	sliders.partnersSlider;
}





