const homepage = (() => {
    let content = document.querySelector('#content');

    let name = document.createElement('h1');
    name.textContent = 'A La Restaurant';

    let description = document.createElement('p');
    description.textContent = 'A La Restuarant has spend decades perfecting their menu, \r\njoin us and enjoy the great atmosphere and customer service.';
    description.setAttribute('style', 'white-space: pre;');
    content.appendChild(name);
    content.appendChild(description);
    
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
})();

export { homepage }