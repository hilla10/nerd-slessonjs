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

        updateSlider();
    });


    previous.addEventListener('click', function (evt) {
        evt.preventDefault;
        currentImage--;

        if (currentImage < 0) {
            currentImage = slideImage.length - 1;
        }

        updateSlider();
    });

    function updateSlider() {


        const newSlide = document.createElement('img');
        newSlide.classList = 'fadeInImg';
        container.appendChild(newSlide);
        newSlide.src = `images/${slideImage[currentImage]}`;

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }


    let stopStartSlider = setInterval(slider, 3000);

    container.addEventListener('mouseover', function () {
        clearInterval(stopStartSlider);
    })

    container.addEventListener('mouseout', function () {
        stopStartSlider = setInterval(slider, 3000)
    })

    function slider() {
        currentImage++;

        if (currentImage > slideImage.length - 1) {
            currentImage = 0;
        }

        updateSlider();
    }

}());