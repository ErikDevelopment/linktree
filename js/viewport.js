document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bg-video');
  const enterImage = document.getElementById('enter-image');

  if (window.innerWidth <= 768) {
    // Video → Poster ersetzen
    const poster = document.createElement('img');
    poster.src = 'assets/mobile-background.jpg';
    poster.alt = 'Poster';
    poster.id = 'mobile-poster';
    poster.style.width = '100%';
    poster.style.height = '100%';
    poster.style.objectFit = 'cover';
    poster.style.position = 'fixed';
    poster.style.top = '0';
    poster.style.left = '0';
    poster.style.zIndex = '-1';
    video.parentNode.replaceChild(poster, video);

    // Mobile Poster für den Startscreen
    if (enterImage) {
      enterImage.src = 'assets/mobile-poster.png';
    }
  } else {
    if (enterImage) {
      enterImage.src = 'assets/poster.png';
    }
  }
});
