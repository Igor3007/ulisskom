import $ from 'jquery';

$(document).ready(function () {

    const popupContainer = $('.right-popup');
    const popupOpen = $('[data-modal-open=right]');
    const popupClose = $('[data-modal-close=right]');

    function modal(params) {
        this.container = params.container;
        this.elemOpen = params.container;
        this.elemClose = params.container;

        this.onOpen = function () {
            this.container.addClass('open')
        }

        this.onClose = function () {
            this.container.removeClass('open')
        }
    }

    // init

    const rightModal = new modal({
        'container': popupContainer,
        'elemOpen': popupOpen,
        'elemClose': popupClose,
    });


    popupOpen.on('click', function () {
        rightModal.onOpen()
    })

    popupClose.on('click', function () {
        rightModal.onClose()
    })



});