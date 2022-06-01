import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";


import $ from 'jquery';
import 'tooltipster';
import 'jquery.inputmask/dist/jquery.inputmask.bundle';
import WishList from "./import/wishList";
import lazysizes from "lazysizes"


/* init svgPolyfill */
svgPolyfill();

//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });

$(document).ready(function () {
    $('[data-tooltip=text]').tooltipster({
        theme: 'tooltipster-shadow',
        delay: 0,
        triggerOpen: {
            mouseenter: true, // For mouse
            tap: true // For touch device
        },
        triggerClose: {
            mouseleave: true, // For mouse
            tap: true // For touch device
        },
        animation: 'fade',
        debug: true,
        side: 'top',
        contentAsHTML: true,
        interactive: true
    });

    var contentTooltip;
    $('[data-tooltip=content]').on('click',
        function () {
            contentTooltip = $(this)
        }).tooltipster({
            content: function () {
                return contentTooltip.parent().find('.tooltip-content').html();
            },
            functionPosition: function (instance, helper, position) {
                if (contentTooltip.hasClass('ic_pin-green')) {
                    position.coord.left += 100;
                    return position;
                }
            },
            theme: 'tooltipster-shadow',
            trigger: 'custom',
            triggerOpen: {
                click: true, // For mouse
                tap: true // For touch device
            },
            triggerClose: {
                click: true, // For mouse
                tap: true // For touch device
            },
            animation: 'fade',
            debug: true,
            side: 'top',
            contentCloning: true,
            contentAsHTML: true,
            interactive: true,
            delay: 100,
        });


    /* init inputmask */

    $("input[type=tel]").inputmask("+375(99) 999-99-99");

    
    $('.cm-item__title').on('click', function(event){
        
        $(this).parent().toggleClass('open')
        
    })

    /* 
    * wishlist
    */

    /* init wishList  */

    const WL = new WishList(); 
    WL.init()

    const wishlist = document.querySelectorAll('[data-wishlist]');
    const arrayWishList = WL.getArray()

    wishlist.forEach(function(item, index){

        const product_id = item.dataset.wishlist;

        if(arrayWishList.lastIndexOf(product_id) !== -1 ){
           item.classList.add('active')
        }

        item.addEventListener('click', function(event){
            if(this.classList.contains('active')){
                WL.remove(product_id)
                this.classList.remove('active')
            }else{
                WL.add(product_id)
                this.classList.add('active')
            }
        })
    })

    function changeColor (elem){
        var colorActive = elem.data('minicard-colorpicker');
        var colorPrice = elem.data('price');

        elem.parents('.minicard').find('[data-minicard-colorpicker]').removeClass('active')
        elem.addClass('active')

        elem.parents('.minicard').find('.minicard__image span img').removeClass('active')
        elem.parents('.minicard').find('[data-minicard-color='+colorActive+']').addClass('active')

        elem.parents('.minicard').find('.minicard__price-current span.cost').text(colorPrice)
        
    }

    $('[data-minicard-colorpicker]').on('mouseenter', function(event){
        changeColor($(this))
    })
    $('[data-minicard-colorpicker]').on('click', function(event){
        changeColor($(this))
    })

    $('.minicard__colors').each(function(){
        changeColor($(this).find('li').first())
    })


    // close popup

    $(document).on('click', '.right-popup.open',function(event){
        $(this).removeClass('open')
        $('body').removeClass('hidden')
    })
    $(document).on('click', '.right-popup__main',function(event){
        event.stopPropagation(true)
    })

    //скролл до отзывов

    $(document).on('click', '[data-review="showlist"]', function (event) {

        var offsetTop = $('.page-card__moreinfo').offset().top

        $('body,html').animate({
            scrollTop: offsetTop
        }, 300);

        $('.card-moreinfo__tabs').find('li[data-filter-id="1"]').trigger('click')

    })

    $('[data-card="select-price"]').on('click', function(event){
        
        $('[data-card="select-price"]').removeClass('active');
        $(this).addClass('active')
        $(this).find('input').prop('checked', true)
        
    })

}); 