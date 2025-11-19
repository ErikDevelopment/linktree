document.addEventListener('DOMContentLoaded', () => {

    const enterScreen = document.getElementById('enter-screen');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.getElementById('main-content');

    const music = document.getElementById("background-music");
    const toggle = document.getElementById("volume-toggle");
    const slider = document.getElementById("volume-slider");

    // --- ENTER BUTTON ---
    if (enterButton && enterScreen && mainContent) {
        enterButton.addEventListener('click', () => {

            enterScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');

            // Musik starten
            let startVolume = parseFloat(slider.value) || 0.5;
            music.volume = startVolume;

            const playPromise = music.play();
            if (playPromise) {
                playPromise.catch(err => console.warn("Music play failed:", err));
            }

            // Video starten
            const bgVideo = document.getElementById('bg-video');
            if (bgVideo) {
                bgVideo.play().catch(err => console.log("Video play failed:", err));
            }
        });
    }

    // --- SLIDER UPDATES ---
    slider.addEventListener("input", () => {
        const vol = parseFloat(slider.value);
        music.volume = vol;

        updateEmoji(vol);
    });

    // Emoji wechseln
    function updateEmoji(vol) {
        if (vol === 0) toggle.textContent = "🔇";
        else if (vol < 0.4) toggle.textContent = "🔉";
        else toggle.textContent = "🔊";
    }
});
