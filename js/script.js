// DOM Elements
const enterScreen = document.getElementById('enter-screen');
const mainContent = document.getElementById('main-content');
const enterButton = document.getElementById('enter-button');
const volumeControl = document.getElementById('volume-control');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.querySelector('.volume-icon'); // Icon-Element
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

    // Update the icon based on volume level
    if (value === 0) {
        volumeIcon.src = 'assets/volumen-muted.png'; // Mute Icon
    } else {
        volumeIcon.src = 'assets/volume-low-white-icon.png'; // Normal Icon
    }
});

// Toggle mute/unmute on icon click
volumeIcon.addEventListener('click', () => {
    if (backgroundMusic.volume === 0) {
        backgroundMusic.volume = 0.5;  // Set to previous volume (can be any value)
        volumeIcon.src = 'assets/volume-low-white-icon.png'; // Normal Icon
    } else {
        backgroundMusic.volume = 0;  // Mute
        volumeIcon.src = 'assets/volumen-muted.png'; // Mute Icon
    }
});
