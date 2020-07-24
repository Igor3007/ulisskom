
import $ from "jquery";
import 'owl.carousel2';


$(document).ready(function () {




    /* $('.header-main__logo').owlCarousel({
        items: 2
    }) */


    // function showProjectsbyCat(cat) {
    //     var elem;

    //     if (cat == 'all') {
    //         $('#projects-hidden .project').each(function () {
    //             var owl = $(".owl-carousel");
    //             elem = $(this).parent().html();


    //             owl.owlCarousel('add', elem).owlCarousel('update');
    //             $(this).parent().remove();
    //         });
    //     } else {
    //         $('#projects-hidden .project.' + cat).each(function () {
    //             var owl = $(".owl-carousel");
    //             elem = $(this).parent().html();

    //             owl.owlCarousel('add', elem).owlCarousel('update');
    //             $(this).parent().remove();
    //         });

    //         $('#projects-carousel .project:not(.project.' + cat + ')').each(function () {
    //             var owl = $(".owl-carousel");
    //             targetPos = $(this).parent().index();
    //             elem = $(this).parent();

    //             $(elem).clone().appendTo($('#projects-hidden'));
    //             owl.owlCarousel('remove', targetPos).owlCarousel('update');;
    //         });
    //     }
    // }

    // $(window).load(function () {

    //     //Click event for filters
    //     $('#project-terms a').click(function (e) {
    //         e.preventDefault();
    //         $('#project-terms a').removeClass('active');

    //         cat = $(this).attr('ID');
    //         $(this).addClass('active');
    //         showProjectsbyCat(cat);
    //         //alert('filtering'+ cat);
    //     });

    //     //Initialize owl carousel
    //     $("#projects-carousel").owlCarousel({

    //         // Most important owl features
    //         items: 3
    //     }
    //     );
    // });
});