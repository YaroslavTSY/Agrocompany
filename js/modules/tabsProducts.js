// Hide/Show Tabs&Content
const products = document.querySelector('.products__content'); // Maybe change to __tabs

let l = products.length, i, cur;
for (i = 0; i < l; i++) {
    cur = products[i];
    let ths = document.querySelector(this);
    ths.querySelector('.tab-items__wrapper').not(':first').hide();
    ths.querySelector('.products__tab').addEventListener('click', function () {
        ths.querySelector('.products__tab').classList.remove('active').eq(document.querySelector(this).index()).classList.add('active');
        ths.querySelector('.tab-items__wrapper').hide().eq(document.querySelector(this).index()).fadeIn()
    }).eq(0).classList.add('active');
};
////