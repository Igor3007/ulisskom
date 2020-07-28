import $ from 'jquery';

const button = document.querySelector('.nav__hamburger');
const elemMenu = document.querySelector('.menu-catalog');
const elemBody = document.querySelector('body')
const elemMain = document.querySelector('main')
const elemHeaderInfo = document.querySelector('.header-info')
const elemHeaderMain = document.querySelector('.header-main')
const elemHeaderLogo = document.querySelector('.header-main__logo')
const elemFooter = document.querySelector('footer')

button.addEventListener('click', event => {
    button.classList.toggle("open");
    elemBody.classList.toggle('menuOpen');
    elemMenu.classList.toggle('open');

    if(document.querySelector('body').clientWidth > 1024){
        if(elemMenu.classList.contains('open')){
            elemMain.style.marginLeft = elemMenu.clientWidth+'px'
            elemFooter.style.marginLeft = elemMenu.clientWidth+'px'
            // elemMenu.style.top = 0
        }else{
            elemMain.style.marginLeft = '0'
            elemFooter.style.marginLeft = '0'
        }
    }else{
        elemMain.style.marginLeft = '0'

        // elemMenu.style.top = document.querySelector('header').clientHeight+'px'

    }

    $(function(){
        setTimeout(function(){
            // $('.banner-home__slider.owl-carousel').trigger('refresh.owl.carousel')
            // $('.slider-home.owl-carousel').trigger('refresh.owl.carousel')
        }, 300)
    })
 

});

