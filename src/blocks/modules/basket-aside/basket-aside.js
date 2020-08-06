import $ from 'jquery';

$(document).ready(function(){
    $('.basket-aside__type input').on('change', function(){
        if($(this).val() == 2){
            $('.basket-aside__form').removeClass('hide')
            $('.basket-aside__button').addClass('hide')
        }else{
            $('.basket-aside__form').addClass('hide')
            $('.basket-aside__button').removeClass('hide')
        }
    })
})