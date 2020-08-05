/* maps yandex */
var myMap;

const mapsObj = [
    {
        'image': 'obj1.jpg',
        'title': 'ЧТУП УлиссКом',
        'address': 'г. Могилев, ул. Криулина, д. 27, 2 этаж',
        'point': [53.955871570632105, 30.33343899999998],
        'time': [
            {
                'weekday': 'Пн - Пт',
                'time': '7:30-20:30',
            }
        ],
        'phone': ['+375 (44) 788-88-52']
    },
    {
        'image': 'obj2.jpg',
        'title': 'ТЦ АРГО',
        'address': 'г. Могилев, ул. Габровская, д. 45, 2 этаж, павильон 12 ',
        'point': [53.87191807067873, 30.361358499999984],
        'time': [
            {
                'weekday': 'Пн - Пт',
                'time': '7:30-20:30',
            },
            {
                'weekday': 'Сб',
                'time': '8:00-20:00',
            },
            {
                'weekday': 'Вс',
                'time': '8:00-19:00',
            },
        ],
        'phone': ['+375 (44) 788-88-52']
    },
    {
        'image': 'obj3.jpg',
        'title': 'ТЦ Строймаркет',
        'address': 'г. Могилев, ул. Чайковского, д. 8, 2 этаж, павильон 56',
        'point': [53.87724207069243, 30.33389749999995],
        'time': [
            {
                'weekday': 'Пн - Пт',
                'time': '7:30-20:30',
            }
        ],
        'phone': ['+375 (44) 788-88-52']
    },
    {
        'image': 'obj3.jpg',
        'title': 'ИП А. Мацукевич',
        'address': 'г. Могилев, ул. Быховская, 6 , Быховский рынок, павильон 97-98',
        'point': [53.89449557064934, 30.323261499999955],
        'time': [
            {
                'weekday': 'Пн - Пт',
                'time': '11:00 - 20:00',
            },
            {
                'weekday': 'Сб-Вс',
                'time': '11:00 - 19:00',
            }
        ],
        'phone': ['+375 (44) 788-88-52', '+375 (44) 788-88-52']
    }

];



// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

    /* масштаб карты */
    function zoom() {

        if ($(window).width() < 680) {
            return 10;
        } else {
            return 11;
        }

    }

    /* коррдинаты геообъектов */
    function getPinCoordinats() {
        var arr = [];
        mapsObj.forEach(function (item) {
            arr.push(item.point);
        });

        return arr;
    }

    console.log(getPinCoordinats())


    var center = [53.92860497860575, 30.329383698242154];

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
            iconImageHref: '/img/svg/ic_pin.svg',
            // Размеры метки.
            iconImageSize: [39, 53],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -58]
        },



        pinCoordints = getPinCoordinats(),



        pinBaloon = [
            '<div class="yamp_baloon" > <h3>Улисском</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+37529 667 78 41 <br> +37529 737 78 41</p> </div>',
            '<div class="yamp_baloon" > <h3>Улисском</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+37529 603 30 55<br> +37529 733 30 55</p> </div>',
            '<div class="yamp_baloon" > <h3>Улисском</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+375296311855<br> +375297011855</p> </div>',
            '<div class="yamp_baloon" > <h3>Улисском</h3> <p>Ежедневно 10:00 — 22:00</p> <p>+375 29 660-67-95 <br> +375 29 776-69-96</p> </div>',
        ];

    function baloonSetting(index) {

        function sliceNumber(arr) {

            var html = '';
            arr.forEach(function (item) {
                html += item + '<br>';
            });
            return html;
        }

        let html = '<div class="yamp_baloon" ><h3>' + mapsObj[index].title + '</h3><p>' + mapsObj[index].address + '</p><p>' + sliceNumber(mapsObj[index].phone) + '</p></div>';

        return {
            hintContent: 'Ulisscom',
            balloonContent: html,
            iconCaption: 'Ulisscom'
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

    $(document).on('click', '.maps-filter__item', function (e) {

        e.preventDefault();
        var index = $('.maps-filter__item').index($(this));

        $('html').animate({
            scrollTop: $('#map').offset().top
        }, 100);

        myMap.setCenter(pinCoordints[index], 16, {
            checkZoomRange: true
        });


    });

}

/* maps yandex */