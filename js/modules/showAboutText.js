// Showing-Disabled More Text in Section "About" //

const textWrapper = document.querySelector('.about-text');
const openTextLink = document.querySelector('.more');
const textOnClick = document.querySelectorAll('.show');
const openTextArrow = document.querySelector('.picture__fix');

openTextLink.addEventListener('click', function () {
    textWrapper.classList.toggle('not-active');
    textOnClick.forEach(el => el.classList.toggle('disabled'));
    openTextArrow.classList.toggle('active');
})
////