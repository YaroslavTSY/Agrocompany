// Hide/Show Tabs&Content
const tabItems = Array.from(document.querySelectorAll('.products__tab'));
const contentItems = Array.from(document.querySelectorAll('.tab-items__wrapper'));

const clearActiveClass = (element, className = 'active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = 'active') => {
	element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('active')) {
			clearActiveClass(tabItems)
			clearActiveClass(contentItems)
			setActiveClass(tabItems, index)
			setActiveClass(contentItems, index)
		}

	})
}

tabItems.forEach(checkoutTabs)