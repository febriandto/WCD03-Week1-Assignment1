// Fungsi menghitung luas persegi panjang
function luasPersegiPanjang(panjang: number, lebar: number): number {
    return panjang * lebar;
}

document.getElementById('luasPersegiPanjang').innerHTML = luasPersegiPanjang(5, 3).toString();



// Diameter, keliling, dan luas lingkaran
function hitungLingkaran(jariJari: number): { diameter: number, keliling: number, luas: number } {
    const diameter = jariJari * 2;
    const keliling = Math.PI * diameter;
    const luas = Math.PI * jariJari * jariJari;
    return { diameter, keliling, luas };
}

document.getElementById('hitungLingkaran').innerHTML = `
    Diameter : ${hitungLingkaran(5).diameter.toString()} <br>
    Keliling : ${hitungLingkaran(5).keliling.toString()} <br> 
    Luas : ${hitungLingkaran(5).luas.toString()} <br> 
`;

// Sudut segitiga jika dua sudut diketahui
function sudutSegitiga(sudutA: number, sudutB: number): number {
    return 180 - (sudutA + sudutB);
}
document.getElementById('sudutSegitiga').innerHTML = sudutSegitiga(80, 65).toString();

// Selisih hari antara dua tanggal
function selisihHari(tanggal1: string, tanggal2: string): number {
    const selisih = Math.abs(new Date(tanggal2).getTime() - new Date(tanggal1).getTime());
    return selisih / (1000 * 60 * 60 * 24);
}
document.getElementById('selisihHari').innerHTML = selisihHari("2024-03-19", "2024-03-21").toString();

// Inisial nama menjadi huruf besar
function inisialNama(namaLengkap: string): string {
    return namaLengkap.split(' ').map(kata => kata[0].toUpperCase()).join('');
}

document.getElementById('inisialNama').innerHTML = inisialNama("John Doe").toString();
