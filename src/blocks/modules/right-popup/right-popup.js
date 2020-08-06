import $ from 'jquery';

$(document).ready(function () {

    const popupContainer = $('.right-popup');
    const popupOpen = $('[data-modal-open=right]');
    const popupClose = $('[data-modal-close=right]');
    const popupContent = $('.right-popup__main');

    function modal(params) {
        this.container = params.container;
        this.elemOpen = params.container;
        this.elemClose = params.container;
        this.elemContent = params.elemContent;

        this.onOpen = function () {
            this.container.addClass('open');
            $('body').addClass('hidden')
        }

        this.onClose = function () {
            this.container.removeClass('open');
            $('body').removeClass('hidden')
        }
    }

    // init

    const rightModal = new modal({
        'container': popupContainer,
        'elemOpen': popupOpen,
        'elemClose': popupClose,
        'elemContent': popupContent,
    });


    popupOpen.on('click', function () {
        rightModal.onOpen()
    })

    popupClose.on('click', function () {
        rightModal.onClose()
    })



});