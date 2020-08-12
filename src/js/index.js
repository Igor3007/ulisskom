import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";

import $ from 'jquery';
import 'tooltipster';

/* init svgPolyfill */
svgPolyfill();

$(document).ready(function () {
    $('[data-tooltip=text]').tooltipster({
        theme: 'tooltipster-shadow',
        delay: 0,
        triggerOpen: {
            mouseenter: true, // For mouse
            tap: true // For touch device
        },
        triggerClose: {
            mouseleave: true, // For mouse
            tap: true // For touch device
        },
        animation: 'fade',
        debug: true,
        side: 'top',
        contentAsHTML: true,
        interactive: true
    });

    var contentTooltip;
    $('[data-tooltip=content]').on('click',
        function () {
            contentTooltip = $(this)
        }).tooltipster({
            content: function () {
                return contentTooltip.parent().find('.tooltip-content').html();
            },
            functionPosition: function (instance, helper, position) {
                if (contentTooltip.hasClass('ic_pin-green')) {
                    position.coord.left += 100;
                    return position;
                }
            },
            theme: 'tooltipster-shadow',
            trigger: 'custom',
            triggerOpen: {
                click: true, // For mouse
                tap: true // For touch device
            },
            triggerClose: {
                click: true, // For mouse
                tap: true // For touch device
            },
            animation: 'fade',
            debug: true,
            side: 'top',
            contentCloning: true,
            contentAsHTML: true,
            interactive: true,
            delay: 100,
        });
});