import $ from "jquery";
import 'owl.carousel2';

$(document).ready(function () {

    const owlBannerHome = $('.banner-home__slider.owl-carousel');

    owlBannerHome.owlCarousel({
        items: 1,
        animateOut: 'fadeOut'
    })

});
