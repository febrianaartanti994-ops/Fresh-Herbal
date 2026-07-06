/* ==========================================================================
   Fresh Herbal Nutrition - Custom Script
   Interaksi navbar & carousel dasar sudah ditangani otomatis oleh
   Bootstrap 5 (bootstrap.bundle.min.js) lewat atribut data-bs-*.
   File ini hanya berisi enhancement tambahan.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('mainNavbar');

  // Tambahkan shadow lebih tebal saat halaman di-scroll
  function handleNavbarShadow() {
    if (!navbar) return;
    if (window.scrollY > 10) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  }

  window.addEventListener('scroll', handleNavbarShadow);
  handleNavbarShadow();

  // Tutup menu mobile otomatis setelah salah satu link nav diklik
  var navLinks = document.querySelectorAll('#mainNav .nav-link');
  var collapseEl = document.getElementById('mainNav');
  if (collapseEl && window.bootstrap) {
    var bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (collapseEl.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }

  // Tombol keranjang (placeholder aksi tambah produk)
  var addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
  addToCartButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.add('btn-gold-active');
      setTimeout(function () {
        btn.classList.remove('btn-gold-active');
      }, 200);
      // TODO: hubungkan ke logika keranjang belanja sesungguhnya
      console.log('Produk ditambahkan ke keranjang');
    });
  });
});
