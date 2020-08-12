import $ from 'jquery';

$(document).ready(function(){


    function totalPrice(){

        const cardElem = $('.page-basket__list > div');
        var total = 0;

        cardElem.each(function(index){

            let count = Number($(this).find('.basketcard__count input').val());
            let price = Number($(this).find('.basketcard__price .basketcard__price-current span').text());

            $(this).find('.basketcard__cost .basketcard__price-current span').text(count * price)

            total = total + (count * price)

        })

        $('.total-price-aside').text(total)

    }

    totalPrice()

    $('.basketcard__count-inc').on('click', function(){
        
        var total = Number($(this).parent().find('input').val());
        $(this).parent().find('input').val(total+1)
        
        totalPrice()
    })

    $('.basketcard__count-dec').on('click', function(){
        var total = Number($(this).parent().find('input').val());

        if (total > 0){
           $(this).parent().find('input').val(total-1)
        }

        totalPrice()
    })


})