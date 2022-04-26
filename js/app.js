import * as functions from "./modules/functions.js";
import * as navTabs from "./modules/navTabs.js";
import * as navPosition from "./modules/navPosition.js";
import * as navScroll from "./modules/navScroll.js";
import * as burger from "./modules/burger.js";
import * as tabToSection from "./modules/tabToSection.js";
import * as showAboutText from "./modules/showAboutText.js";
import * as productsTabs from "./modules/tabsProducts.js"
import * as sliders from "./modules/sliders.js";
import * as map from "./modules/map.js";


functions.isWebp();


// Navigation //

// Tabs/active/on click
navTabs

// Change positon Nav Menu on Scroll
navPosition

////

// Burger-menu //
burger

// Scroll to section on click Tab //
tabToSection


// Show/Hide more text in section About, imported from showAboutText.js
showAboutText

// Products Tab's imported from tabsProducts.js//
productsTabs


window.onload = function () {
    // import from navScroll.js
    // Change class "_active" for Nav on Scroll to Section
    navScroll

    // Swiper-sliders imported from sliders.js
    sliders.docsSlider;
    sliders.gallerySlider;
    sliders.partnersSlider;

    //Yandex map's imported from map.js
    map
}







