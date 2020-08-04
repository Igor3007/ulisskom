/* maps yandex */
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

    function zoom() {

        if ($(window).width() < 680) {
            return 11;
        } else {
            return 12;
        }

    }


    var center = [53.89705340209633, 27.497975465607126];

    var myMap = new ymaps.Map('map', {
        center: center,
        zoom: zoom()
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        pinSetting = {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/images/svg/logo-min.svg',
            // Размеры метки.
            iconImageSize: [39, 53],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -58]
        },

        pinCoordints = [
            [53.93801208830523, 27.48768288888546],
            [53.85017070947475, 27.433519410034126],
            [53.917585573276845, 27.429467152114864],
            [52.09722857202479, 23.754653999999977]
        ],

        pinBaloon = [
            '<div class="yamp_baloon" > <h3>FlashPark в ТРЦ ARENA CITY</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+37529 667 78 41 <br> +37529 737 78 41</p> </div>',
            '<div class="yamp_baloon" > <h3>FlashPark в ТРЦ DIAMOND CITY</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+37529 603 30 55<br> +37529 733 30 55</p> </div>',
            '<div class="yamp_baloon" > <h3>FlashPark в ТРЦ ЕВРООПТ</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+375296311855<br> +375297011855</p> </div>',
            '<div class="yamp_baloon" > <h3>FlashPark в ТРЦ EUROSPAR</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+375 29 660-67-95 <br> +375 29 776-69-96</p> </div>',
        ];

    function baloonSetting(data) {

        return {
            hintContent: 'FlashPark',
            balloonContent: pinBaloon[data],
            iconCaption: 'Arena'
        }
    }

    pinCoordints.forEach(function (item, index, array) {
        var myPlacemark = new ymaps.Placemark(item, baloonSetting(index), pinSetting);
        myMap.geoObjects.add(myPlacemark);
    });


    myMap.behaviors.disable('scrollZoom');

    var ctrlKey = false;
    var ctrlMessVisible = false;
    var timer;

    // Отслеживаем скролл мыши на карте, чтобы показывать уведомление
    myMap.events.add(['wheel', 'mousedown'], function (e) {
        if (e.get('type') == 'wheel') {
            if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
                $('#ymap_ctrl_display').fadeIn(300);
                ctrlMessVisible = true;
                clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
                timer = setTimeout(function () {
                    $('#ymap_ctrl_display').fadeOut(300);
                    ctrlMessVisible = false;
                }, 1500);
            } else { // Ctrl нажат, скрываем сообщение
                $('#ymap_ctrl_display').fadeOut(100);
            }
        }
        if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
            $('#ymap_ctrl_display').fadeOut(100);
        }
    });

    // Обрабатываем нажатие на Ctrl
    $(document).keydown(function (e) {
        if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
            ctrlKey = true;
            myMap.behaviors.enable('scrollZoom');
        }
    });

    $(document).keyup(function (e) { // Ctrl не нажат: выключаем масштабирование мышью
        if (e.which === 17) {
            ctrlKey = false;
            myMap.behaviors.disable('scrollZoom');
        }
    });

    $(document).on('click', '.contacts-list__viewmap', function (e) {

        e.preventDefault();
        var index = $('.contacts-list__viewmap').index($(this));

        $('html').animate({
            scrollTop: $('#map-container').offset().top
        }, 100);

        myMap.setCenter(pinCoordints[index], 16, {
            checkZoomRange: true
        });


    });

}

/* maps yandex */