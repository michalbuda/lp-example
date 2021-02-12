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

const hamburgerMenu = document.querySelector('.navigation__hamburger')
const hamburger = document.querySelector('.hamburger__js');
const topBar = document.getElementById('topBar');
const botBar = document.getElementById('botBar');
const midBar = document.getElementById('midBar');

let isOpen = true;

hamburger.addEventListener('click', (e) => {
    // console.log(isOpen)
    if(isOpen === false){
        hamburgerMenu.classList.toggle('navigation__hamburger--animation')
        setTimeout(() => {
        hamburgerMenu.classList.toggle('navigation__hamburger--visible')
        }, 600);
    } else {
        hamburgerMenu.classList.remove('navigation__hamburger--animation')
        hamburgerMenu.classList.toggle('navigation__hamburger--visible')
    }

    if(isOpen){
        midBar.setAttribute('width', '0');
        topBar.setAttribute("x", "1.56445");
        topBar.setAttribute("y", "0.150757");
        topBar.setAttribute("transform", "rotate(45 1.56445 0.150757)");

        botBar.setAttribute('x', "0.150391");
        botBar.setAttribute('y', "28.435");
        botBar.setAttribute("transform", "rotate(-45 0.150391 28.435)");

    } else {
        midBar.setAttribute('width', '40');
        topBar.setAttribute("x", '0');
        topBar.setAttribute("y", '0');
        topBar.setAttribute("transform", 'rotate(0)');
    
        botBar.setAttribute('x', "-0.150391");
        botBar.setAttribute('y', "28");
        botBar.setAttribute("transform", 'rotate(0)');
    }
    
   isOpen = !isOpen;
   console.log(isOpen)
})

