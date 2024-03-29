const iconMenu = document.querySelector('.menu__icon');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
let menuBody = document.querySelector('.menu__body');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('nav').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.documentElement.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault();
		}
	}
}