$(window).on('load', function () {
    'use strict';

    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageCount * imageWidth) + 'px';

    let lefPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    $('#next').click(function() {
        counter++;

        if(counter === imageCount) {
            counter = 0;
        }

        lefPosition = `-${counter * imageWidth}px`;
        $('#slider ul').animate( {left: lefPosition}, 700, 'easeInQuad');

    });

    $('#previous').click(function() {
        counter--;

        if(counter < 0 ) {
            counter = imageCount-1;
        }

        lefPosition = `-${counter * imageWidth}px`;
        $('#slider ul').animate( {left: lefPosition}, 700, 'easeInQuad');

    });


});