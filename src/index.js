import { homepage } from './home'
import { menu } from './menu'
import { contactUs } from './contact';

const pageLoad = (() => {
    window.onload = homepage;
})();

const tabs = (() => {
    let homeBtn = document.querySelector('.homebtn');
    let menuBtn = document.querySelector('.menubtn');
    let contactBtn = document.querySelector('.contactbtn');

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
})();

console.log('Hi restaurant!');