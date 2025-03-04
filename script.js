// Daftar kata-kata KAK GEM
const quotes = [
  "Jangan menyerah, hari ini sulit, besok mungkin lebih sulit, tapi lusa akan indah.",
  "Kesuksesan dimulai dari langkah pertama yang berani.",
  "Jadilah seperti batu karang, tetap kuat meski diterpa ombak.",
  "Kegagalan adalah guru terbaik dalam hidup.",
  "Jangan takut bermimpi besar, karena mimpi adalah awal dari kesuksesan.",
  "Setiap usaha yang keras akan membuahkan hasil yang manis.",
  "Kesempatan tidak datang dua kali, raihlah saat ini juga.",
  "Jangan bandingkan dirimu dengan orang lain, bandingkan dengan dirimu yang kemarin.",
  "Kebahagiaan adalah ketika kita bisa bersyukur atas apa yang kita miliki.",
  "Jangan pernah meragukan dirimu sendiri, karena kamu lebih kuat dari yang kamu kira.",
  "Kesabaran adalah kunci dari segala kesuksesan.",
  "Jangan menunggu kesempatan, ciptakanlah kesempatan itu sendiri.",
  "Setiap masalah pasti ada solusinya, percayalah.",
  "Jangan pernah berhenti belajar, karena ilmu adalah kekuatan.",
  "Kebaikan yang kamu lakukan hari ini akan kembali padamu di masa depan."
];

// Ambil elemen-elemen yang dibutuhkan
const quoteDisplay = document.getElementById('quote-display');
const getQuoteButton = document.getElementById('get-quote');
const loading = document.getElementById('loading');

// Fungsi untuk mendapatkan kata-kata acak
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Event listener untuk tombol
getQuoteButton.addEventListener('click', () => {
  // Tampilkan efek loading
  loading.style.display = 'block';
  quoteDisplay.style.display = 'none';

  // Simulasikan proses loading selama 1,5 detik
  setTimeout(() => {
      const randomQuote = getRandomQuote();
      quoteDisplay.textContent = randomQuote;

      // Sembunyikan efek loading dan tampilkan kata-kata
      loading.style.display = 'none';
      quoteDisplay.style.display = 'block';
  }, 1500); // Waktu loading 1,5 detik
});