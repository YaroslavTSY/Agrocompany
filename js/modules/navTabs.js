// Tabs/active/on click
const navTabs = document.querySelectorAll('.menu__list li');

function selectPanel(e) {
    console.log(e.target);
    navTabs.forEach(el => el.classList.remove('_active'));
    e.target.parentElement.classList.add('_active')
}

navTabs.forEach(el => {
    el.addEventListener('click', selectPanel);
})