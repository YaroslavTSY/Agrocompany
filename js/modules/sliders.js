import Swiper from "swiper/swiper-bundle.js";
// import Swiper JS

const defaultSettings = {
	slidesPerView: 'auto',
	spaceBetween: 0,
	effect: "coverflow",
	centeredSlides: true,
	observer: true,
	autoHeight: true,
	coverflowEffect: {
		depth: 200,
		modifier: 1,
		rotate: 0,
		stretch: 90,
		slideShadows: false,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true
	},
	autoplay: {
		delay: 100000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	speed: 450,
}

export const docsSlider = new Swiper('.docs-slider', {
	...defaultSettings,
	initialSlide: 2,
	navigation: {
		nextEl: '.docs-slider__button-next.slider-typical__button-next',
		prevEl: '.docs-slider__button-prev.slider-typical__button-prev',
	},
	pagination: {
		el: '.docs-slider__pagination.slider-typical__pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<div class="docs-slider__scrollbar slider-typical__scrollbar">' +
				'<span class="' + currentClass + '"></span>' +
				' ' +
				'<span class="' + totalClass + '"></span>' +
				'</div>'
		}
	},
	scrollbar: {
		el: '.docs-slider__scrollbar.slider-typical__scrollbar',
		draggable: true,
		snapOnRelease: true,
	},
});

export const gallerySlider = new Swiper('.gallery-slider', {
	...defaultSettings,
	initialSlide: 1,
	navigation: {
		nextEl: '.gallery-slider__button-next.slider-typical__button-next',
		prevEl: '.gallery-slider__button-prev.slider-typical__button-prev',
	},
	pagination: {
		el: '.gallery-slider__pagination.slider-typical__pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<div class="gallery-slider__scrollbar slider-typical__scrollbar">' +
				'<span class="' + currentClass + '"></span>' +
				' ' +
				'<span class="' + totalClass + '"></span>' +
				'</div>'
		}
	},
	scrollbar: {
		el: '.gallery-slider__scrollbar.slider-typical__scrollbar',
		draggable: true,
		snapOnRelease: true,
	}
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