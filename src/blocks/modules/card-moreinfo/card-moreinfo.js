import $ from 'jquery';
import 'owl.carousel2';

$(document).ready(function () {

    /* info slider */

    const cardProps = $('.card-moreinfo__slider.owl-carousel');
    const cardPropsTabs = $('.card-moreinfo__tabs');
    const cardPropsItem = $('.card-moreinfo__itemtab');

    function scrollToElement(elem, container) {

        container.animate({
            scrollLeft: elem.offset().left - container.offset().left + container.scrollLeft() - (container.width() / 2) + (elem.width() / 2),
            duration: 300
        });
    }

    function scrollToElementTop(elem, container) {

        container.animate({
            scrollTop: elem.offset().top - container.offset().top + container.scrollTop() - (container.height() / 2) + (elem.height() / 2),
            duration: 200
        });
    }

    cardProps.owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: false,
        onInitialized: function (event) {
            cardPropsTabs.find('li').first().addClass('active')
        },
        onTranslate: function () {
            cardPropsItem.show()
        },
        onTranslated: function () {
            cardPropsItem.removeAttr('style')
        },
        onDrag: function () {
            cardPropsItem.show()
        },
        onDragged: function () {
            cardPropsItem.removeAttr('style')
        },

    })

    cardPropsTabs.on('click', 'li', function (e) {

        e.preventDefault();

        cardPropsTabs.find('li').removeClass('active')

        $(this).addClass('active')

        var selectGroup = $(this).data('filter-id');
        /*переходим к группе*/
        cardProps.trigger('to.owl.carousel', [selectGroup, 300, true]);

    })

    cardProps.on('changed.owl.carousel', function (event) {

        var indexElemSlider = event.item.index;

        var ElemSlider = $('.card-moreinfo__tabcontainer .owl-stage > div')
            .eq(indexElemSlider)
            .children()
            .data('filter');

        cardPropsTabs.find('li').removeClass('active');
        $('[data-filter-id=' + ElemSlider + ']').addClass('active');

        scrollToElement($('.card-moreinfo__tabs ul li.active'), $('.card-moreinfo__tabs ul'));

    })

    /*  reviewSend */

    const reviewSend = $('#reviewSend');
    const reviewForm = $('#reviewForm');

    reviewSend.on('click', function (event) {
        if ($('.review-add__form').hasClass('hide')) {
            $('.review-add__form').removeClass('hide');
        } else {
            reviewForm.submit();
        }
    })



    /* .card-slider__list.owl-carousel */

    const cardSlider = $('.card-slider__list.owl-carousel');
    const cardThunb = $('.card-slider__thumb');

    cardSlider.owlCarousel({
        items: 1,
        loop: false,
    })

    cardSlider.on('changed.owl.carousel', function (event) {

        var indexElemSlider = event.item.index;

        let elemActive = cardThunb.find('li').eq(indexElemSlider)

        cardThunb.find('li').removeClass('active');
        elemActive.addClass('active');

        scrollToElementTop(elemActive, cardThunb.find('ul'));

    })

    cardThunb.on('click', 'li', function () {
        let indexThumb = cardThunb.find('li').index($(this));
        cardSlider.trigger('to.owl.carousel', [indexThumb, 300, true]);
    })

    $('.card-slider__thumb ul').on('scroll', function (e) {
        e.preventDefault()
        e.stopPropagation();
    })


})//ready


