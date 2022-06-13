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

export const docsSlider = new Swiper('.docs-slider', {
    navigation: {
        nextEl: '.docs-button-next',
        prevEl: '.docs-button-prev',
    },
    pagination: {
        el: '.docs-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<div class="docs-scrollbar">' +
                '<div class="swiper-scrollbar-drag"></div>' +
                ' ' +
                '<span class="' + currentClass + '"></span>' +
                ' ' +
                '<span class="' + totalClass + '"></span>' +
                '</div>'
        }
    },
    scrollbar: {
        el: '.docs-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: 46,
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 450,
    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: -83,
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