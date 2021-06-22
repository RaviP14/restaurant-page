import { homepage } from './home'
import { menu } from './menu'

const pageLoad = (() => {
    window.onload = homepage;
    //window.onload = menu;
})();

console.log('Hi restaurant!');