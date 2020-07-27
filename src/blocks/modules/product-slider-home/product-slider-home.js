import $ from 'jquery';
import 'owl.carousel2';


$(document).ready(function () {

    const productSlider = $('.product-slider__tabscontainer.owl-carousel');
    const productSliderNext = $('.product-slider__nav-next');
    const productSliderPrev = $('.product-slider__nav-prev');

    productSlider.owlCarousel({
        items: 5,
        loop: true
    })

    productSliderNext.on('click', function () {
        productSlider.trigger('next.owl.carousel')
    })
    productSliderPrev.on('click', function () {
        productSlider.trigger('prev.owl.carousel')
    })



})
modules.define('product-slider-home', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                }
            }
        }
    }));

});
