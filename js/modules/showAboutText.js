// Showing-Disabled More Text in Section "About" //
const idAboutInfo = document.getElementById('aboutInfo').id;
const aboutWrapper = document.querySelector('.about__wrapper');
const textWrapper = document.querySelector('.about__text');
const openTextLink = document.querySelector('.about__more');

function openHref() {
	if (textWrapper.classList.contains('_not-active')) {
		openTextLink.href = `##`
	} else {
		openTextLink.href = `#${idAboutInfo}`
	}
}

openHref();

openTextLink.addEventListener('click', function () {
	openHref();
	textWrapper.classList.toggle('_not-active');
	aboutWrapper.classList.toggle('_not-active');
})
////