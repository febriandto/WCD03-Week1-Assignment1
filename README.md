# **Perbandingan JavaScript vs TypeScript dalam Menghitung Luas, Keliling, dan Konversi Data**

## **1. Menghitung Luas Persegi Panjang**
### **JavaScript**
```javascript
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

document.getElementById('luasPersegiPanjang').innerHTML = luasPersegiPanjang(5, 3).toString();
```

### **TypeScript**
```typescript
function luasPersegiPanjang(panjang: number, lebar: number): number {
    return panjang * lebar;
}

document.getElementById('luasPersegiPanjang')!.innerHTML = luasPersegiPanjang(5, 3).toString();
```
> **Perbedaan:** TypeScript mendefinisikan tipe data `number`, sedangkan JavaScript tidak.

---

## **2. Menghitung Diameter, Keliling, dan Luas Lingkaran**
### **JavaScript**
```javascript
function hitungLingkaran(jariJari) {
    const diameter = jariJari * 2;
    const keliling = Math.PI * diameter;
    const luas = Math.PI * jariJari * jariJari;
    return { diameter, keliling, luas };
}

document.getElementById('hitungLingkaran').innerHTML = `
    Diameter : ${hitungLingkaran(5).diameter} <br>
    Keliling : ${hitungLingkaran(5).keliling} <br> 
    Luas : ${hitungLingkaran(5).luas} <br> 
`;
```

### **TypeScript**
```typescript
function hitungLingkaran(jariJari: number): { diameter: number, keliling: number, luas: number } {
    const diameter = jariJari * 2;
    const keliling = Math.PI * diameter;
    const luas = Math.PI * jariJari * jariJari;
    return { diameter, keliling, luas };
}

document.getElementById('hitungLingkaran')!.innerHTML = `
    Diameter : ${hitungLingkaran(5).diameter} <br>
    Keliling : ${hitungLingkaran(5).keliling} <br> 
    Luas : ${hitungLingkaran(5).luas} <br> 
`;
```
> **Perbedaan:** TypeScript menentukan return type `{ diameter: number, keliling: number, luas: number }`, sedangkan JavaScript tidak.

---

## **3. Menghitung Sudut Segitiga Jika Dua Sudut Diketahui**
### **JavaScript**
```javascript
function sudutSegitiga(sudutA, sudutB) {
    return 180 - (sudutA + sudutB);
}

document.getElementById('sudutSegitiga').innerHTML = sudutSegitiga(80, 65).toString();
```

### **TypeScript**
```typescript
function sudutSegitiga(sudutA: number, sudutB: number): number {
    return 180 - (sudutA + sudutB);
}

document.getElementById('sudutSegitiga')!.innerHTML = sudutSegitiga(80, 65).toString();
```
> **Perbedaan:** TypeScript menetapkan parameter sebagai `number`.

---

## **4. Menghitung Selisih Hari Antara Dua Tanggal**
### **JavaScript**
```javascript
function selisihHari(tanggal1, tanggal2) {
    const selisih = Math.abs(new Date(tanggal2) - new Date(tanggal1));
    return selisih / (1000 * 60 * 60 * 24);
}

document.getElementById('selisihHari').innerHTML = selisihHari("2024-03-19", "2024-03-21").toString();
```

### **TypeScript**
```typescript
function selisihHari(tanggal1: string, tanggal2: string): number {
    const selisih = Math.abs(new Date(tanggal2).getTime() - new Date(tanggal1).getTime());
    return selisih / (1000 * 60 * 60 * 24);
}

document.getElementById('selisihHari')!.innerHTML = selisihHari("2024-03-19", "2024-03-21").toString();
```
> **Perbedaan:** TypeScript menggunakan `string` sebagai parameter.

---

## **5. Mengubah Nama Lengkap Menjadi Inisial Kapital**
### **JavaScript**
```javascript
function inisialNama(namaLengkap) {
    return namaLengkap.split(' ').map(kata => kata[0].toUpperCase()).join('');
}

document.getElementById('inisialNama').innerHTML = inisialNama("John Doe");
```

### **TypeScript**
```typescript
function inisialNama(namaLengkap: string): string {
    return namaLengkap.split(' ').map(kata => kata[0].toUpperCase()).join('');
}

document.getElementById('inisialNama')!.innerHTML = inisialNama("John Doe");
```
> **Perbedaan:** TypeScript menetapkan parameter `string` dan return type `string`.

---

# **Kesimpulan**
- **JavaScript lebih fleksibel**, tapi kurang aman karena tidak ada pemeriksaan tipe data.
- **TypeScript lebih ketat**, mengurangi risiko error dengan mendefinisikan tipe data.
- **Perbedaan utama** terlihat dalam deklarasi tipe parameter dan return type.

Silakan gunakan TypeScript jika ingin **kode lebih aman**, dan JavaScript jika ingin lebih **cepat tanpa setup tambahan**. 🚀
