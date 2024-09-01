const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

// hamburger management
hamburger.addEventListener('click', (event) => {
    menu.classList.toggle('top-full');
    menu.classList.toggle('bottom-0');
});

function initializeSplide(selector) {
    const splide = new Splide(selector, {
        perPage: 1,
        rewind: true,
        arrows: false,
        pagination: false
    });
    splide.mount();
    return splide;
}

const splide1 = initializeSplide('#slider1');
const splide2 = initializeSplide('#slider2');


prevButton.addEventListener('click', () => {
    splide2.go('<'); 
});

nextButton.addEventListener('click', () => {
    splide2.go('>'); 
});
