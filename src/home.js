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

    let imgHome = document.createElement('img');
    imgHome.src = './images/kitchen_1280.jpg'
    imgHome.style.height = '511.8px'
    imgHome.style.width = '768px'
    homeDiv.appendChild(imgHome);
});

export { homepage }