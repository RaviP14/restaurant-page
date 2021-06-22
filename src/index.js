import { homepage } from './home'

const pageLoad = (() => {
    window.onload = homepage;
})();

console.log('Hi restaurant!');