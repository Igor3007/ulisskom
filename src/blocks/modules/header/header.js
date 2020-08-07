import $ from 'jquery';

const button = document.querySelector('.nav__hamburger');
const buttonMobile = document.querySelector('.menu-catalog__close');
const buttonFooter = document.querySelector('.footer__catalog');


const elemMenu = document.querySelector('.menu-catalog');
const elemBody = document.querySelector('body')
const elemMain = document.querySelector('main')
const elemHeaderInfo = document.querySelector('.header-info')
const elemHeaderMain = document.querySelector('.header-main')
const elemHeaderLogo = document.querySelector('.header-main__logo')
const elemFooter = document.querySelector('footer')

function openMenu() {
    button.classList.toggle("open");
    elemBody.classList.toggle('menuOpen');
    elemMenu.classList.toggle('open');


    if (document.querySelector('body').clientWidth > 1024 && !document.querySelector('.main-container__aside')) {
        if (elemMenu.classList.contains('open')) {
            elemMain.style.marginLeft = elemMenu.clientWidth + 'px'
            elemFooter.style.marginLeft = elemMenu.clientWidth + 'px'
            // elemMenu.style.top = 0
        } else {
            elemMain.style.marginLeft = '0'
            elemFooter.style.marginLeft = '0'
        }
    } else {
        elemMain.style.marginLeft = '0'

        // elemMenu.style.top = document.querySelector('header').clientHeight+'px'

    }

    $(function () {
        setTimeout(function () {
            // $('.banner-home__slider.owl-carousel').trigger('refresh.owl.carousel')
            // $('.slider-home.owl-carousel').trigger('refresh.owl.carousel')
        }, 300)
    })
}

button.addEventListener('click', function () {
    openMenu();
});

buttonMobile.addEventListener('click', function () {
    openMenu();
});

buttonFooter.addEventListener('click', function () {
    openMenu();
});

$(document).ready(function () {

    $('.nav__search span').on('click', function () {
        $(this).parent().toggleClass('open')
        $(this).parent().find('.form').toggleClass('hide')
        $(this).parent().find('.form input').focus()
    })

    $('.nav__search input').on('blur', function () {
        $(this).parents('.nav__search').removeClass('open')
        $(this).parents('.nav__search').find('.form').toggleClass('hide')
    })

})


