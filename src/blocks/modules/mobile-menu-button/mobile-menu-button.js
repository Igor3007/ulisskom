import $ from 'jquery';

 const buttonOpenFilter = $('.filter-mobile-button');
if(buttonOpenFilter){
        buttonOpenFilter.on('click', function(elem){
            if($('.main-container__aside').toggleClass('open') && $('.main-container__aside').hasClass('open')){
                $(this).find('span').text('назад')
            }else{
                $(this).find('span').text($(this).attr('data-text'));
            }
        })
    }