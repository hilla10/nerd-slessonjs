window.addEventListener('load', function () {
    // How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;

    // How wid is each slide?
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;

    // Total slider width?
    const totalWidth = `${slideCount * slideWidth}px`;

    // Dom element
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');

    // Upper left corner of slider
    let leftPosition = 0;

    // To keep track of each slide
    let counter = 0;

    // Sets the width of the slider (which is also in the css);
    slider.style.width = totalWidth;

    next.addEventListener('click', function (event) {
        event.preventDefault();
        counter++;
        if (counter === slideCount) {
            // Set the counter to 0;
            counter = 0;
        }
        // move the slider to the next slide.
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

    previous.addEventListener('click', function (event) {
        event.preventDefault();
        counter--;

        if (counter < 0) {
            counter = slideCount - 1;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

    // Auto Play


    let stopStartSlider = setInterval(slides, 3000)

    const sliderWrapper = document.querySelector('#slider-wrapper');

    sliderWrapper.addEventListener('mouseover', function () {
        clearInterval(stopStartSlider);
    })

    sliderWrapper.addEventListener('mouseout', function () {
        stopStartSlider = setInterval(slides, 3000);
    })


    function slides() {
        counter++;
        if (counter === slideCount) {
            counter = 0;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    }

});
