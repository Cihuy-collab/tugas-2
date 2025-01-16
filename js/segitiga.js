// Fungsi untuk menghitung luas segitiga
function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const heightTriangle = parseFloat(document.getElementById('heightTriangle').value);

    if (!isNaN(base) && !isNaN(heightTriangle)) {
        const area = (base * heightTriangle) / 2;
        document.getElementById('resultArea').textContent = `Luas segitiga adalah: ${area} cm²`;
    } else {
        document.getElementById('resultArea').textContent = 'Harap masukkan nilai yang valid untuk alas dan tinggi.';
    }
}

// Event listener untuk tombol hitung luas
document.getElementById('calculateArea').addEventListener('click', calculateArea);