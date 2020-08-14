import $ from 'jquery';

$(document).ready(function () {

    function modal(params) {
        this.container = params.container;

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

    const popupOpenCallBack = $('[data-modal-open=callback]');
    const popupCloseCallBack = $('[data-modal-close=callback]');

    const rightModalCallback = new modal({
        'container': $('.right-popup[data-modal=callback]')
    });


    popupOpenCallBack.on('click', function () {
        rightModalCallback.onOpen()
    })

    popupCloseCallBack.on('click', function () {
        rightModalCallback.onClose()
    })



});