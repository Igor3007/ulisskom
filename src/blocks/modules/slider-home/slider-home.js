import $ from "jquery";
import 'owl.carousel2';

$(document).ready(function () {

    $('.slider-home.owl-carousel').owlCarousel({
        items: 3,
        loop: true
    })
})

/* modules.define('slider-home', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    const slide = ['slide1', 'slide2']
                }
            }
        }
    }));

}); */
