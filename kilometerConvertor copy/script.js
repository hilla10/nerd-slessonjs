(function () {
    'use strict';

    let convertType = 'mile';

    const convert = document.getElementById('convert');
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');


    document.addEventListener('keydown', function (event) {
        const key = event.key;

        if (key === 'k') {
            heading.innerHTML = 'Kilometers to Miles Converters';
            intro.innerHTML = 'Type in a number of kilometer and click the button to convert the distance to mile'

            convertType = 'kilometer'
        }

        if (key === 'm') {
            heading.innerHTML = 'Miles to Kilometers Converters';
            intro.innerHTML = 'Type in a number of mile and click the button to convert the distance to kilometer'
            convertType = 'mile';

        }

        if (key === 'Enter') {
            convertDistance();
        }
    });

    convert.addEventListener('submit', function (event) {
        event.preventDefault();
        convertDistance()

    });



    function convertDistance() {
        const distance = Number(document.getElementById('distance').value);

        const answer = document.getElementById('answer');

        if (distance) {

            kilometer = (distance * 1.609344).toFixed(3);
            mile = (distance * 0.6213712).toFixed(3);

            if (convertType === 'mile') {
                answer.innerHTML = `<h2>${distance} miles convert in to ${kilometer} kilometers</h2>`
                answer.style.color = "#fff";

            } else {
                answer.innerHTML = `<h2>${distance} kilometers convert in to ${mile} miles</h2>`;
                answer.style.color = "#fff";
            }

        } else {
            answer.innerHTML = '<h2>Please provide a number</h2>';
            answer.style.color = "red";
        }
    }
}());