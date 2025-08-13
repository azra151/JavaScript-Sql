let nilai = [75, 88, 92];

console.log("1. Nilai Awal:");

nilai.forEach((n,i) =>{
    console.log(`Siswa ${i + 1} : ${n}`);
});
console.log("");

//menambahkan nilai baru menggunakan push

nilai.push(60);
console.log("2. setelah nilai 60 ditambahkan (push):");
console.log(nilai);
console.log("");

// menghapus nilai terakhir menggunakan pop
let nilaiTerakhir = nilai.pop();
console.log("3. setelah menghapus nilai terakhir (pop):", nilaiTerakhir);
console.log("Nilai sekarang:", nilai);
console.log("");

//menggunakan map untuk menambahkan bonus 5 poin ke semua nilai
let nilaibonus = nilai.map((n) => n + 5);
console.log("4. nilai setelah ditambahkan 5 poin  (map):");
console.log(nilaibonus);
console.log("");

//menampilkan nilai bonus dengan foreach

console.log("5. Cetak nilai akhir siswa:");
nilaibonus.forEach((n,i) => {
    console.log(`Siswa ${i + 1}: ${n}`);
});