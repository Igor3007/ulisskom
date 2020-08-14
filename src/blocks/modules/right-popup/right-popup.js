import $ from 'jquery';

$(document).ready(function () {


    /* 
    =====================================================    
    */


    function modal(params) {
        this.container = params.container;

        this.onOpen = function () {
            if ($('div').is('[data-modal=login]')) {
                this.container.addClass('open');
                $('body').addClass('hidden');
            }

        }

        this.onClose = function () {
            this.container.removeClass('open');
            $('body').removeClass('hidden')
        }
    }



    // init

    const popupContainer = $('.right-popup[data-modal=login]');
    const popupOpen = $('[data-modal-open=login]');
    const popupClose = $('[data-modal-close=login]');

    const rightModal = new modal({
        'container': popupContainer,
    });


    popupOpen.on('click', function () {
        rightModal.onOpen()
    })

    popupClose.on('click', function () {
        rightModal.onClose()
    })



});