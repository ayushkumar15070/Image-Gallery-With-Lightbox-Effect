const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImgs = document.querySelectorAll('.gallery-img');

galleryImgs.forEach(img => {
      img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
      });
});

document.querySelector('.close').addEventListener('click', () => {
      lightbox.style.display = 'none';
});
