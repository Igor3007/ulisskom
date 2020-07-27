import $ from 'jquery';
import 'owl.carousel2';


$(document).ready(function () {

    const productSlider = $('.product-slider__tabscontainer.owl-carousel');
    const productSliderNext = $('.product-slider__nav-next');
    const productSliderPrev = $('.product-slider__nav-prev');
    const productSliderTabs = $('.product-slider__list');
    const productSliderSlide = $('.product-slider__slide');

    productSlider.owlCarousel({
        items: 5,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            760: {
                items: 3
            },
            1200: {
                items: 4
            },
            1440: {
                items: 5
            }
        }
    })

    productSliderNext.on('click', function () {
        productSlider.trigger('next.owl.carousel')
    })
    productSliderPrev.on('click', function () {
        productSlider.trigger('prev.owl.carousel')
    })

    /* filter slider-2 */
    productSliderTabs.on('click', 'li', function (e) {

        e.preventDefault();

        productSliderTabs.find('li').removeClass('active')
        $(this).addClass('active')

        /*получаем id текущей группы*/
        var selectGroup = $(this).data('filter-id');

        /* находим первый элем в слайдере с таким id и получаем index */
        var indexElem = $('.product-slider__slide[data-filter=' + selectGroup + ']').parent().index()

        /*переходим к группе*/
        productSlider.trigger('to.owl.carousel', [indexElem, 200, true]);

    })

    productSlider.on('changed.owl.carousel', function (event) {

        var indexElemSlider = event.item.index;

        var ElemSlider = $('.product-slider__tabscontainer .owl-stage > div')
            .eq(indexElemSlider)
            .children()
            .data('filter');

        productSliderTabs.find('li').removeClass('active');
        $('[data-filter-id=' + ElemSlider + ']').addClass('active');

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
