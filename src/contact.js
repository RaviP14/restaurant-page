const contactUs = (() => {
    let body = document.querySelector('body');

    let contactDiv = document.createElement('div');
    contactDiv.className = 'contactDiv';

    body.appendChild(contactDiv);

    let header = document.createElement('h1');
    header.textContent = 'Contact Us';

    let address = document.createElement('p');
    address.textContent = '451 Restaurant, Street, Food Heaven, F33 H45';

    contactDiv.appendChild(header);
    contactDiv.appendChild(address);
})

export { contactUs }