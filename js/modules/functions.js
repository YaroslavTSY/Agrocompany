export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	};

	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
export function ie7() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'agro\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-agreement': '&#xe916;',
		'i-delivery': '&#xe917;',
		'i-pack': '&#xe918;',
		'i-purchase': '&#xe919;',
		'i-service': '&#xe920;',
		'i-support': '&#xe91f;',
		'i-arrow-more': '&#xe915;',
		'i-facebook': '&#xe900;',
		'i-instagram': '&#xe901;',
		'i-mail': '&#xe902;',
		'i-phone': '&#xe903;',
		'i-culture': '&#xe904;',
		'i-firewood': '&#xe905;',
		'i-document': '&#xe90c;',
		'i-flour': '&#xe90d;',
		'i-corn': '&#xe90e;',
		'i-wood': '&#xe90f;',
		'i-wood-2': '&#xe910;',
		'i-boxes': '&#xe911;',
		'i-companies': '&#xe912;',
		'i-plant': '&#xe913;',
		'i-countries': '&#xe914;',
		'0': 0
	},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if (!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
export function addLoadedClass() {
	if (!document.documentElement.classList.contains('loading')) {
		window.addEventListener("load", function () {
			setTimeout(function () {
				document.documentElement.classList.add('loaded');
			}, 0);
		});
	}
}
export function scrollTop() {
	const scrollBtn = document.createElement("button");
	scrollBtn.appendChild(document.createElement('span'));
	scrollBtn.setAttribute("id", "scrollBtn");
	scrollBtn.querySelector('span').setAttribute("class", "i-arrow-more");
	document.body.appendChild(scrollBtn);
	const scrollBtnDisplay = function () {
		window.scrollY + 500 > window.innerHeight
			? scrollBtn.classList.add("show")
			: scrollBtn.classList.remove("show");
	};
	window.addEventListener("scroll", scrollBtnDisplay);
	const footerScrollBtn = document.querySelector('#scrollBtn');
	const scrollWindow = function () {
		if (window.scrollY != 0) {
			setTimeout(function () {
				window.scrollTo(0, window.scrollY - window.scrollY);
			}, 10);
		}
	};
	scrollBtn.addEventListener("click", scrollWindow);
	footerScrollBtn.addEventListener("click", scrollWindow);
};