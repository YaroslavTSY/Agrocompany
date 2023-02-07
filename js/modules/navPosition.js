
const mainHeader = document.querySelector('.header');
const menuBody = document.querySelector('.menu__body');

let scrollpos = window.scrollY;

const scrollChange = mainHeader.clientHeight;

const add_class_on_scroll = () => menuBody.classList.add("scroll")
const remove_class_on_scroll = () => menuBody.classList.remove("scroll")

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY;

	if (scrollpos >= scrollChange) { add_class_on_scroll() }
	else { remove_class_on_scroll() }

})