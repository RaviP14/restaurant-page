const contactUs = (() => {
    let content = document.querySelector('#content');

    let contactDiv = document.createElement('div');
    contactDiv.className = 'contactDiv';

    content.appendChild(contactDiv);

    let header = document.createElement('h1');
    header.textContent = 'Contact Us';

    let address = document.createElement('p');
    address.textContent = 'Location: 451 Restaurant Street, Food Heaven, F33 H45';

    let email = document.createElement('p');
    email.textContent = 'Email: alarestaurant@fake-mail.com';

    contactDiv.appendChild(header);
    contactDiv.appendChild(address);
    contactDiv.appendChild(email);
})

export { contactUs }