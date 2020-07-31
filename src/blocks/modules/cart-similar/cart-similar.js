import $ from 'jquery';
import 'owl.carousel2';

$(document).ready(function () {

    const similarSlider = $('.card-similar.owl-carousel');

    similarSlider.owlCarousel({
        items: 1,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            580: {
                items: 3
            },
            768: {
                items: 4
            }
        },

    })


})//ready
