// import Swiper JS
export const docsSlider = new Swiper('.docs-slider', {
	navigation: {
		nextEl: '.docs-slider__button-next',
		prevEl: '.docs-slider__button-prev',
	},
	pagination: {
		el: '.docs-slider__pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<div class="docs-slider__scrollbar">' +
				'<span class="' + currentClass + '"></span>' +
				' ' +
				'<span class="' + totalClass + '"></span>' +
				'</div>'
		}
	},
	scrollbar: {
		el: '.docs-slider__scrollbar',
		draggable: true,
		snapOnRelease: true,
		dragSize: 46,
	},
	slidesPerView: 'auto',
	spaceBetween: 20,
	// loop: true,
	effect: "coverflow",
	centeredSlides: true,
	observer: true,
	autoHeight: true,
	initialSlide: 2,
	coverflowEffect: {
		depth: 150,
		modifier: 1,
		rotate: 0,
		stretch: 80,
		slideShadows: false,
	},
	// keyboard: {
	// 	enabled: true,
	// 	onlyInViewport: true,
	// 	pageUpDown: true
	// },
	// // autoplay: {
	// // 	delay: 8000,
	// // 	stopOnLastSlide: false,
	// // 	disableOnInteraction: false
	// // },
	// // speed: 450,
});

export const partnersSlider = new Swiper('.partners-slider', {
	slidesPerView: 7,
	watchOverFlow: true,
	scrollbar: {
		el: '.partners-scrollbar',
		draggable: true,
		snapOnRelease: true,
	},
	breakpoints: {
		1200: {
			slidesPerView: 7
		},
		992: {
			slidesPerView: 5
		},
		768: {
			slidesPerView: 4
		},
		576: {
			slidesPerView: 3
		},
		320: {
			slidesPerView: 2
		}
	}
});

export const gallerySlider = new Swiper('.gallery-slider', {
	navigation: {
		nextEl: '.gallery-button-next',
		prevEl: '.gallery-button-prev',
	},
	pagination: {
		el: '.gallery-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<div class="gallery-scrollbar">' +
				'<div class="swiper-scrollbar-drag"></div>' +
				' ' +
				'<span class="' + currentClass + '"></span>' +
				' ' +
				'<span class="' + totalClass + '"></span>' +
				'</div>'
		}
	},
	scrollbar: {
		el: '.gallery-scrollbar',
		draggable: true,
		snapOnRelease: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true
	},
	autoHeight: true,
	slidesPerView: 1,
	centeredSlides: true,
	initialSlide: 0,
	speed: 450,
	observer: true,
	observerParents: true,
	observerSlideChildren: true,
	breakpoints: {
		576: {
			slidesPerView: 3,
			loop: true,
			autoplay: {
				delay: 8000,
				stopOnLastSlide: false,
				disableOnInteraction: false
			},
		}
	}
});