// Fungsi untuk menghitung volume balok
function calculateVolume() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        const volume = length * width * height;
        document.getElementById('result').textContent = `Volume balok adalah: ${volume} cm³`;
    } else {
        document.getElementById('result').textContent = 'Harap masukkan nilai yang valid untuk panjang, lebar, dan tinggi.';
    }
}

// Event listener untuk tombol hitung
document.getElementById('calculate').addEventListener('click', calculateVolume);