// Hide/Show Tabs&Content
const tabItems = Array.from(document.querySelectorAll('.products-tabs__tab'));
const contentItems = Array.from(document.querySelectorAll('.products-content'));

const clearActiveClass = (element, className = '_active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = '_active') => {
	element[index].classList.add(`${className}`)
}
localStorage.setItem('selectedTabIndex', 0);
localStorage.setItem('selectedContentIndex', 0);
const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('_active')) {
			clearActiveClass(tabItems)
			clearActiveClass(contentItems)
			setActiveClass(tabItems, index)
			setActiveClass(contentItems, index)
			localStorage.setItem('selectedTabIndex', index);
			localStorage.setItem('selectedContentIndex', index);
		}

	})
}

tabItems.forEach(checkoutTabs);


const selectedTabIndex = localStorage.getItem('selectedTabIndex');
const activeTab = document.querySelector('.products-tabs__tab._active');
const selectedContentIndex = localStorage.getItem('selectedContentIndex');
const activeContent = document.querySelector('.products-content._active');

if (!activeTab && selectedTabIndex !== null) {
	// Installation of active taboo
	tabItems[selectedTabIndex].classList.add('_active');
}
if (!activeContent && selectedContentIndex !== null) {
	// Display the appropriate content set
	contentItems[selectedContentIndex].classList.add('_active');
}