window.addEventListener('load', function () {
    // How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;

    // How wid is each slide?
    const slideWith = this.document.querySelector('#slider-wrapper').offsetWidth;

    // Total slider width?
    const totalWidth = `${slideCount * slideWith}px`;

    // Dom element
    const slider = this.document.querySelector('#slider-wrapper ul');
    const next = this.document.querySelector('#next');
    const previous = this.document.querySelector('#previous');

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
        leftPosition = `-${counter * slideWith}px`;
        slider.style.left = leftPosition;
    });

    previous.addEventListener('click', function (event) {
        event.preventDefault();
        counter--;

        if (counter < 0) {
            counter = slideCount - 1;
        }
        leftPosition = `-${counter * slideWith}px`;
        slider.style.left = leftPosition;
    })


});