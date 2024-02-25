(function () {

    'use strict';

    let currentImage = 0;

    const slideImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

    const container = document.getElementById('content');
    const next = document.getElementById('next');
    const previous = document.getElementById('previous');
    const slide = document.getElementById('slide');

    // click event for next button

    next.addEventListener('click', function (evt) {
        evt.preventDefault;
        currentImage++;

        if (currentImage > slideImages.length - 1) {
            currentImage = 0;
        }

        updateSlide();
    });

    // click event for previous button

    previous.addEventListener('click', function (evt) {
        evt.preventDefault;
        currentImage--;

        if (currentImage < 0) {
            currentImage = slideImages.length - 1;
        }

        updateSlide();
    });

    // Update the slide img

    function updateSlide() {
        const newSlide = document.createElement('img');
        newSlide.src = `images/${slideImages[currentImage]}`;
        container.appendChild(newSlide);
        newSlide.className = 'fadeInImg';

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }

}());