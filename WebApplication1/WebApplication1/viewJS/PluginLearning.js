
(function($){
    $.fn.helloWorld = function (options) {
        "use strict";
        //Plugin Settings
        var settings = $.extend({
            text: 'Hello, World!',
            color: null,
            fontStyle: null
        }, options);
        //-End



        return this.each(function () {
            $(this).text(settings.text);
            if (settings.color) {
                $(this).css('color', settings.color);
            }
                
        });
    }


}(jQuery));