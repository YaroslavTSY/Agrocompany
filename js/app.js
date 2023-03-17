import * as functions from "./modules/functions.js";
import * as definition from "./modules/definition.js";

import * as popup from "./modules/popup.js";
import * as navTabs from "./modules/navTabs.js";
import * as navPosition from "./modules/navPosition.js";
import * as navScroll from "./modules/navScroll.js";
import * as burger from "./modules/burger.js";
import * as tabToSection from "./modules/tabToSection.js";
import * as showAboutText from "./modules/showAboutText.js";
import * as tabsProducts from "./modules/tabsProducts.js";
import * as sliders from "./modules/sliders.js";

functions.isWebp();
functions.addLoadedClass();
functions.scrollTop();

//! Checking Mobile or PC device
if (definition.isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

let oldIE = false;

if (oldIE) {
	functions.ie7();
}
definition.minWidth576.addEventListener("change", setClassTitleAbsolute);

function setClassTitleAbsolute() {
	const controlSection = document.querySelector('.control');
	if (!definition.minWidth576.matches) {
		controlSection.classList.add('title-absolute')
	} else {
		controlSection.classList.remove('title-absolute')
	}
}

setClassTitleAbsolute();

// Popups //
popup

// Navigation //
navTabs

// Change positon Nav Menu on Scroll //
navPosition

// Burget Menu //

burger

// Scroll to section on click Tab //
tabToSection


// Show/Hide more text in section About, imported from showAboutText.js //
showAboutText

// Products Tab's imported from tabsProducts.js //
tabsProducts

document.addEventListener('DOMContentLoaded', functions.formHandler)
window.onload = function () {
	// document.getElementById('hideAll').classList.add('__active');
	if (window.scrollY < 1 && definition.minWidth576.matches) {
		navPosition.headerContacts.classList.add('__active');
	}
	definition.minWidth768.addEventListener('change', () => {
		if (!definition.minWidth768.matches) {
			document.querySelector('.menu__underline').style.cssText = `
			left: 0%;
			width: 0%;
			`;
		}
	})
	// Change class "_active" for Nav on Scroll to Section
	navScroll

	// Swiper-sliders imported from sliders.js
	sliders.docsSlider;
	sliders.gallerySlider;
	// sliders.partnersSlider;
}





