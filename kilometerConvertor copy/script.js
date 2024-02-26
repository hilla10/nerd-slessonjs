let convertType = 'mile';
const heading = document.querySelector('h1');
const intro = document.querySelector('p');
const answer = document.getElementById('answer');
const form = document.getElementById('convert');

document.addEventListener('keydown', function (event) {

    let key = event.key
    if (key === 'k') {
        // change the heading and intro
        heading.innerHTML = 'Kilometers to Miles Converts';
        intro.innerHTML = 'Type in a number of Kilometers and click the button to convert the distance to Miles'
        // change the value of the convertType variable
        convertType = 'kilometer';


    } else if (key === 'm') {
        heading.innerHTML = 'Miles to Kilometers Converts';
        intro.innerHTML = 'Type in a number of mile and click the button to convert the distance to kilometer';

        // change the value of the convertType variable
        convertType = 'mile'
    }

})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const distance = Number(document.getElementById('distance').value);

    const submit = document.getElementById('submit').value;

    if (distance) {

        const kilometer = (distance * 0.62137119).toFixed(3);
        const miles = (distance * 1.60934).toFixed(3);

        if (convertType === 'mile') {

            answer.innerHTML = `<h2>${distance} miles convert in to ${miles} kilometers</h2>`;
            answer.style.color = "#fff";
            console.log(answer);

        } else {
            answer.innerHTML = `<h2>${distance} kilometer convert in to ${kilometer} mile </h2>`
            answer.style.color = "#fff";
        }

    } else {
        answer.innerHTML = '<h2>please provide a number</h2>';
        answer.style.color = 'red';
    }
});