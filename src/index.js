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
        homepage()
    })

    menuBtn.addEventListener('click', () => {
        menu()
    })

    contactBtn.addEventListener('click', () => {
        contactUs()
    })

})();

console.log('Hi restaurant!');