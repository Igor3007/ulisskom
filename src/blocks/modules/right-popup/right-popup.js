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
            if ($('div').is('[data-modal=oneclick]')) {
                this.container.addClass('open');
                $('body').addClass('hidden');
            }
            if ($('div').is('[data-modal=call]')) {
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

    // init

    var popupOneClickContainer = $('.right-popup[data-modal=oneclick]');
    var popupOneClickOpen = $('[data-modal-open=oneclick]');
    var popupOneClickClose = $('[data-modal-close=oneclick]');

    const rightModalOne = new modal({
        'container': popupOneClickContainer,
    });

    popupOneClickOpen.on('click', function () {

        console.log($('input[name="select-price"]:checked').val())

        if(typeof $('input[name="select-price"]:checked').val() === 'undefined'){
            alert('select price please')
            return false
        }

        rightModalOne.onOpen()
    })

    popupOneClickClose.on('click', function () {
        rightModalOne.onClose()
    })



     
    // init

    var popupCallContainer = $('.right-popup[data-modal=call]');
    var popupCallOpen = $('[data-modal-open=call]');
    var popupCallClose = $('[data-modal-close=call]');

    const rightModalCall = new modal({
        'container': popupCallContainer,
    });

    popupCallOpen.on('click', function () {
        rightModalCall.onOpen()
        
    })

    popupCallClose.on('click', function () {
        rightModalCall.onClose()
    })


});