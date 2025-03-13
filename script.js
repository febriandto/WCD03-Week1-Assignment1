// Fungsi menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
document.getElementById('luasPersegiPanjang').innerHTML = luasPersegiPanjang(5, 3).toString();
// Diameter, keliling, dan luas lingkaran
function hitungLingkaran(jariJari) {
    var diameter = jariJari * 2;
    var keliling = Math.PI * diameter;
    var luas = Math.PI * jariJari * jariJari;
    return { diameter: diameter, keliling: keliling, luas: luas };
}
document.getElementById('hitungLingkaran').innerHTML = "\n    Diameter : ".concat(hitungLingkaran(5).diameter.toString(), " <br>\n    Keliling : ").concat(hitungLingkaran(5).keliling.toString(), " <br> \n    Luas : ").concat(hitungLingkaran(5).luas.toString(), " <br> \n");
// Sudut segitiga jika dua sudut diketahui
function sudutSegitiga(sudutA, sudutB) {
    return 180 - (sudutA + sudutB);
}
document.getElementById('sudutSegitiga').innerHTML = sudutSegitiga(80, 65).toString();
// Selisih hari antara dua tanggal
function selisihHari(tanggal1, tanggal2) {
    var selisih = Math.abs(new Date(tanggal2).getTime() - new Date(tanggal1).getTime());
    return selisih / (1000 * 60 * 60 * 24);
}
document.getElementById('selisihHari').innerHTML = selisihHari("2024-03-19", "2024-03-21").toString();
// Inisial nama menjadi huruf besar
function inisialNama(namaLengkap) {
    return namaLengkap.split(' ').map(function (kata) { return kata[0].toUpperCase(); }).join('');
}
document.getElementById('inisialNama').innerHTML = inisialNama("John Doe").toString();
