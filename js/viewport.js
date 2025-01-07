document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('bg-video');
    const poster = document.createElement('img');
    poster.src = 'assets/poster.png';
    poster.alt = 'Poster';
    poster.style.width = '100%';
    poster.style.height = '100%';
    poster.style.objectFit = 'cover';

    if (window.innerWidth <= 768) {
      // Ersetze das Video mit dem Poster-Bild
      video.parentNode.replaceChild(poster, video);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const enterImage = document.getElementById('enter-image');

    if (window.innerWidth <= 768) {
      // Ersetze das Bild durch ein anderes Bild (optional)
      enterImage.src = 'assets/mobile-poster.png';  // Hier kannst du ein anderes Bild für mobile Geräte setzen
    } else {
      // Andernfalls beibehalten, das Bild für größere Bildschirme
      enterImage.src = 'assets/poster.png';
    }
});