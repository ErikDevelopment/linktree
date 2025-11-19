document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    const mobilePoster = document.getElementById('mobile-poster');

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        if (video) video.style.display = 'none';
        if (mobilePoster) mobilePoster.style.display = 'block';
    } else {
        if (video) video.style.display = 'block';
        if (mobilePoster) mobilePoster.style.display = 'none';
    }
});
