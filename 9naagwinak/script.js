// Efek thumbnail sederhana + highlight navigasi
const thumbs = document.querySelectorAll('.thumb');
const hero = document.querySelector('.hero-image img');

thumbs.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    thumbs.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    if (i === 0) {
      hero.src = 'images/banner.png';
    } else {
      hero.src = 'images/banner.png';
    }
  });
});

// Efek klik lembut pada tombol
document.querySelectorAll('.cta-row a,.header-btn,.dual-buttons a,.quick-links a').forEach(el => {
  el.addEventListener('mousedown', () => el.style.transform = 'scale(.98)');
  el.addEventListener('mouseup', () => el.style.transform = '');
  el.addEventListener('mouseleave', () => el.style.transform = '');
});
