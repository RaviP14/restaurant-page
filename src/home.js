const homepage = (() => {
    let content = document.querySelector('#content');

    let homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv';

    content.appendChild(homeDiv);

    let description = document.createElement('p');
    description.textContent = 'A La Restuarant has spend decades perfecting their menu, \r\njoin us and enjoy the great atmosphere and customer service.';
    description.setAttribute('style', 'white-space: pre;');
    homeDiv.appendChild(description);
    
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
});

export { homepage }