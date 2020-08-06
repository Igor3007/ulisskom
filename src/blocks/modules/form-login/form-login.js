import $ from 'jquery';
import 'owl.carousel2';

$(document).ready(function () {

    const login = $('.form-login__slider.owl-carousel');
    const loginPanel = $('.form-login__item');

    login.owlCarousel({
        items: 1,
        margin: 0,
        onTranslate: function () {
            loginPanel.show()
        },
        onTranslated: function () {
            loginPanel.removeAttr('style')
        },
        onDrag: function () {
            loginPanel.show()
        },
        onDragged: function () {
            loginPanel.removeAttr('style')
        },
        onInitialize: function () {
            $('.right-popup__main').css({
                overflow: 'auto'
            })
        }

    })

    $(document).on('click', '#register', function (event) {
        event.preventDefault();
        login.trigger('to.owl.carousel', [1, 300, true]);
    });

    $(document).on('click', '#recovery', function (event) {
        event.preventDefault();
        login.trigger('to.owl.carousel', [2, 300, true]);
    });

    $(document).on('click', '#signin', function (event) {
        event.preventDefault();
        login.trigger('to.owl.carousel', [0, 300, true]);
    });


})