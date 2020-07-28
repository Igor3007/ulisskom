import $ from "jquery";
import 'owl.carousel2';

$(document).ready(function () {

    $('.banner-home__slider.owl-carousel').owlCarousel({
        items: 1,
        animateOut: 'fadeOut'
    })

});