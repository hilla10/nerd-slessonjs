let detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
    event.preventDefault();

    const destName = event.target.elements['name'].value;
    const destLocation = event.target.elements['location'].value;
    const destPhoto = event.target.elements['photo'].value;
    const destDesc = event.target.elements['description'].value;

    let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    for (i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = '';
    }

    let wishListContainer = document.querySelector('#destinations_container');

    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = 'My wish list';
    };

    document.getElementById('destinations_container').appendChild(destCard);

}

function createDestinationCard(name, location, photoURL, description) {

    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);

    let constantPhotoUrl = 'image/Rufus.jpg';

    if (photoURL.length === 0) {
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', photoURL);
    };

    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    let cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);



    if (description.length !== 0) {
        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    let cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';
    
    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;

};

function removeDestination(event) {
    let card = event.target.parentElement.parentElement;
    card.remove();
};
