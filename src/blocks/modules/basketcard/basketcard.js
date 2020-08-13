import $ from 'jquery';

$(document).ready(function () {


    function totalPrice() {

        const cardElem = $('.page-basket__list > div');
        const totalPriceElem = $('.total-price-aside');
        const totalCountElem = $('.total-count-aside');
        var total = 0;

        cardElem.each(function (index) {

            let count = Number($(this).find('.basketcard__count input').val());
            let price = Number($(this).find('.basketcard__price .basketcard__price-current span').text());

            $(this).find('.basketcard__cost .basketcard__price-current span').text((count * price).toFixed(2))

            total = total + (count * price);
            totalCountElem.text(index + 1);
        })

        totalPriceElem.text(total.toFixed(2))


    }

    totalPrice();

    $('.basketcard__count-inc').on('click', function () {

        var total = Number($(this).parent().find('input').val());
        $(this).parent().find('input').val(total + 1)

        totalPrice()
    })

    $('.basketcard__count-dec').on('click', function () {
        var total = Number($(this).parent().find('input').val());

        if (total > 1) {
            $(this).parent().find('input').val(total - 1)
        }

        totalPrice()
    })

    $('.basketcard__count-num input').on('blur', function () {


        const regEx = /[^\d\+]/g;
        const value = $(this).val().replace(regEx, '');
        $(this).val(value ? value : 1);

        totalPrice()
    })


})