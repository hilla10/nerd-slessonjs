(function () {
    const convert = document.getElementById('convert');

    convert.addEventListener('submit', function (event) {
        event.preventDefault();

        const distance = Number(document.getElementById('distance').value);

        const answer = document.getElementById('answer');

        if (distance) {
            // converter

            const conversion = (distance * 1.60934).toFixed(2);
            answer.innerHTML = `<h2>${distance} Miles convert in to ${conversion} kilometers</h2>`;
            answer.style.color = '#fff';

        } else {
            answer.innerHTML = 'please provide a number';
            answer.style.color = 'red';
        }
    });
}());