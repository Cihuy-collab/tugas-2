document.getElementById('year').textContent = new Date().getFullYear();

function showSection(sectionId, headerTitle) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    const header = document.getElementById('header');
    header.querySelector('h1').innerText = headerTitle;
}
document.getElementById('link-home').addEventListener('click', () => showSection('home', 'Beranda'));
document.getElementById('link-balok').addEventListener('click', () => showSection('balok', 'Menghitung Volume Balok'));
document.getElementById('link-segitiga').addEventListener('click', () => showSection('segitiga', 'Menghitung Luas Segitiga'));
document.getElementById('link-speed').addEventListener('click', () => showSection('speed', 'Menghitung Kecepatan'));

document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('#input-jembut input, .input-group input, .input-group textarea');
    function applyFilledClass(input) {
        if (input.value !== '') {
            input.classList.add('filled');
        }
        input.addEventListener('input', function () {
            if (this.value !== '') {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
    }
    inputs.forEach(function (input) {
        applyFilledClass(input);
    });
});