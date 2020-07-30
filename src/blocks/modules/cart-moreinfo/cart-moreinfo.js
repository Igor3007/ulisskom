import $ from 'jquery';
import 'owl.carousel2';

$(document).ready(function () {

    const productSlider = $('.cart-moreinfo__slider.owl-carousel');
    // const productSliderNext = $('.product-slider__nav-next');
    // const productSliderPrev = $('.product-slider__nav-prev');
    const productSliderTabs = $('.cart-moreinfo__tabs');
    // const productSliderSlide = $('.product-slider__slide');

    productSlider.owlCarousel({
        items: 1,
        loop: false,
        onInitialized: function(event){
            productSliderTabs.find('li').first().addClass('active')
        }
    })

    /* productSliderNext.on('click', function () {
        productSlider.trigger('next.owl.carousel')
    })
    productSliderPrev.on('click', function () {
        productSlider.trigger('prev.owl.carousel')
    }) */

    /* filter slider-2 */
    productSliderTabs.on('click', 'li', function (e) {

        e.preventDefault();

        productSliderTabs.find('li').removeClass('active')
        $(this).addClass('active')

        /*получаем id текущей группы*/
        var selectGroup = $(this).data('filter-id');

        /* находим первый элем в слайдере с таким id и получаем index */
        //var indexElem = $('.cart-moreinfo__slider[data-filter=' + selectGroup + ']').parent().index()

        console.log(selectGroup)

        /*переходим к группе*/
        productSlider.trigger('to.owl.carousel', [selectGroup, 300, true]);

    })

    productSlider.on('changed.owl.carousel', function (event) {

        var indexElemSlider = event.item.index;

        var ElemSlider = $('.cart-moreinfo__tabcontainer .owl-stage > div')
            .eq(indexElemSlider)
            .children()
            .data('filter');

        productSliderTabs.find('li').removeClass('active');
        $('[data-filter-id=' + ElemSlider + ']').addClass('active');

    })


})
 



/* modules.define('cart-moreinfo', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
 */