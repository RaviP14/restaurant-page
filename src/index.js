import { homepage } from './home'
import { menu } from './menu'
import { contactUs } from './contact';

const restaurantName = (() => {
    let body = document.querySelector('body');
    let navbar = document.querySelector('.navbar')

    let nameDiv = document.createElement('div');
    nameDiv.className = 'namediv';
    body.appendChild(nameDiv);
    body.insertBefore(nameDiv, navbar);
    
    let name = document.createElement('h1');
    name.textContent = 'A La Restaurant';
    nameDiv.appendChild(name);
})();

const pageLoad = (() => {
    window.onload = homepage;
})();

const tabs = (() => {
    let homeBtn = document.querySelector('#homebtn');
    let menuBtn = document.querySelector('#menubtn');
    let contactBtn = document.querySelector('#contactbtn');

    homeBtn.addEventListener('click', () => {
        removePage()
        homepage()
    })

    menuBtn.addEventListener('click', () => {
        removePage()
        menu()
    })

    contactBtn.addEventListener('click', () => {
        removePage()
        contactUs()
    })

    function removePage() {
        let contents = document.getElementById('content');
        while (contents.hasChildNodes()) {
            contents.removeChild(contents.firstChild);
        }
    }

    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(clickedTab => {
        clickedTab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            clickedTab.classList.add('active');
        })
    })
})();

console.log('Hi restaurant!');