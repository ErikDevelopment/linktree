// DOM Elements
const enterScreen = document.getElementById('enter-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');
const volumeControl = document.getElementById('volume-control');
const volumeSlider = document.getElementById('volume-slider');
const backgroundMusic = document.getElementById('background-music');

// Initial volume
backgroundMusic.volume = 0.5;

// Enter button click handler
enterButton.addEventListener('click', () => {
    enterScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    backgroundMusic.play();
});

// Volume control hover
volumeControl.addEventListener('mouseenter', () => {
    volumeSlider.classList.remove('hidden');
});

volumeControl.addEventListener('mouseleave', () => {
    volumeSlider.classList.add('hidden');
});

// Volume slider change
volumeSlider.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    backgroundMusic.volume = value;
});