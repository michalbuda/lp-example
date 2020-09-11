import '../scss/main.scss';
import Flickity from 'flickity';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const slider = document.querySelector('.carousel');
const flck = new Flickity( slider, {
    groupCells: 1,
    freeScroll: true,
    autoPlay: 2000,
});

flck;

