// Showing-Disabled More Text in Section "About" //
const idAboutInfo = document.getElementById('aboutInfo').id;
const textWrapper = document.querySelector('.about-text');
const openTextLink = document.querySelector('.more');
const textOnClick = document.querySelectorAll('.show');
const idTextOnClickFirst = document.getElementById('showFirst').id;
const openTextArrow = document.querySelector('.picture__fix');

console.log(idTextOnClickFirst.id);
console.log(idAboutInfo.id);

function openHref() {
	if (textWrapper.classList.contains('not-active')) {
		openTextLink.href = `#${idTextOnClickFirst}`
	} else {
		openTextLink.href = `#${idAboutInfo}`
	}
}

openHref();

openTextLink.addEventListener('click', function () {
	openHref();
	textWrapper.classList.toggle('not-active');
	textOnClick.forEach(el => el.classList.toggle('disabled'));
	openTextArrow.classList.toggle('active');
})
////