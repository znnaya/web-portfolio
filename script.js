// Toggle Dark Mode / Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle buka/tutup menu saat tombol hamburger diklik
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Menutup menu dropdown otomatis saat salah satu link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Tampilkan/sembunyikan tombol berdasarkan posisi scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Aksi ketika tombol diklik: scroll kembali ke atas
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function switchCategory(category, clickedBtn) {
    const buttons = document.querySelectorAll('.toggle-btn');
    const uiuxCards = document.querySelectorAll('.uiux-project');
    const dataCards = document.querySelectorAll('.data-project');

    // Ubah status kelas tombol (aktif vs transparan/inactive)
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('inactive');
    });

    clickedBtn.classList.remove('inactive');
    clickedBtn.classList.add('active');

    // Tampilkan kartu sesuai kategori yang dipilih
    if (category === 'uiux') {
        uiuxCards.forEach(card => card.style.display = 'block');
        dataCards.forEach(card => card.style.display = 'none');
    } else if (category === 'data') {
        uiuxCards.forEach(card => card.style.display = 'none');
        dataCards.forEach(card => card.style.display = 'block');
    }
}
