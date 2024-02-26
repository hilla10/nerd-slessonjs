(function () {

    'use strict';

    let currentImage = 0;

    const slideImage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

    const container = document.querySelector('#content');
    const slide = document.querySelector('#slide');
    const previous = document.querySelector('#previous');
    const next = document.querySelector('#next');

    next.addEventListener('click', function (evt) {
        evt.preventDefault;
        currentImage++;

        if (currentImage > slideImage.length - 1) {
            currentImage = 0;
        }

        slider();
    });


    previous.addEventListener('click', function (evt) {
        evt.preventDefault;
        currentImage--;

        if (currentImage < 0) {
            currentImage = slideImage.length - 1;
        }

        slider();
    });

    function slider() {


        const newSlide = document.createElement('img');
        newSlide.classList = 'fadeInImg';
        container.appendChild(newSlide);
        newSlide.src = `images/${slideImage[currentImage]}`;

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }


}());