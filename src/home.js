const homepage = (() => {
    let content = document.querySelector('#content');

    let homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv';

    content.appendChild(homeDiv);

    let description = document.createElement('p');
    description.textContent = 'We\'ve spent decades perfecting our menu';
    homeDiv.appendChild(description);

    let midText = document.createElement('p');
    midText.textContent = 'Join us and enjoy the great atmosphere and customer service \r\nor oder online!'
    midText.setAttribute('style', 'white-space: pre;');
    homeDiv.appendChild(midText);

    /*document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2013/12/11/13/49/holiday-226830_1280.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover'; */
});

export { homepage }