(function () {
    'use strict';

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleSubmitForm);

    function handleSubmitForm(event) {
        event.preventDefault();

        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDesc = event.target.elements['description'].value;

        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        for (let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = '';
        }

        const wishListContainer = document.querySelector('#destinations_container');

        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = 'My wish list';
        };

        document.getElementById('destinations_container').appendChild(destCard);

    }

    function createDestinationCard(name, location, photoURL, description) {

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', name);

        const constantPhotoUrl = 'image/Rufus.jpg';

        if (photoURL.length === 0) {
            img.setAttribute('src', constantPhotoUrl);
        } else {
            img.setAttribute('src', photoURL);
        };

        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubTitle = document.createElement('h4');
        cardSubTitle.innerText = location;
        cardBody.appendChild(cardSubTitle);



        if (description.length !== 0) {
            let cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = 'Remove';

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);
        return card;

    };

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();
    };

})();