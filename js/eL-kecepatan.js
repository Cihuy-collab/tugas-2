// Fungsi untuk menghitung kecepatan
function calculateSpeed() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!isNaN(distance) && !isNaN(time) && time > 0) {
        const speed = distance / time;
        document.getElementById('resultSpeed').textContent = `Kecepatan adalah: ${speed} km/jam`;
    } else {
        document.getElementById('resultSpeed').textContent = 'Harap masukkan nilai yang valid untuk jarak dan waktu.';
    }
}

// Event listener untuk tombol hitung kecepatan
document.getElementById('calculateSpeed').addEventListener('click', calculateSpeed);