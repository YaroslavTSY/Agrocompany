// Hide/Show Tabs&Content
const tabItems = Array.from(document.querySelectorAll('.products-tabs__tab'));
const contentItems = Array.from(document.querySelectorAll('.products-content'));

const clearActiveClass = (element, className = '_active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = '_active') => {
	element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('_active')) {
			clearActiveClass(tabItems)
			clearActiveClass(contentItems)
			setActiveClass(tabItems, index)
			setActiveClass(contentItems, index)
		}

	})
}

tabItems.forEach(checkoutTabs)