import { homepage } from './home'
import { menu } from './menu'
import { contactUs } from './contact';

const pageLoad = (() => {
    window.onload = homepage;
    //window.onload = menu;
    //window.onload = contactUs;
})();

console.log('Hi restaurant!');