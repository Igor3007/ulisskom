import $ from "jquery";
import 'owl.carousel2';

$(document).ready(function () {

    $('.top-brands__list.owl-carousel').owlCarousel({
        items: 7,
        margin: 5,
        loop: true,

        responsive: {
            0: {
                items: 3
            },
            580: {
                items: 4
            },
            760: {
                items: 5
            },
            1200: {
                items: 6
            },
            1440: {
                items: 7
            }
        }
    })

});


/* modules.define('top-brands', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {

            }
        }
    }
}));

}); */
