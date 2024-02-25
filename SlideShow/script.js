(function () {

    "use strict";

    const slideImages = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];

    const slides = document.querySelector('#slide');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');

    let currentImage = 0;

    next.addEventListener('click', nextImg)

    previous.addEventListener('click', previousImg);

    function nextImg() {
        currentImage++;

        if (currentImage > slideImages.length - 1) {
            currentImage = 0;
        };

        /*   currentImage = (currentImage + 1) % slideImages.length;
         */
        slides.src = slideImages[currentImage];
    };

    function previousImg() {
        currentImage--;

        if (currentImage < 0) {
            currentImage = slideImages.length - 1
        };
        /* 
                currentImage = (currentImage - 1 + slideImages.length) % slideImages.length; */

        slides.src = slideImages[currentImage];
    }

}());