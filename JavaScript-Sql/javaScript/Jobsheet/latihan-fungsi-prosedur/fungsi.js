function hitungLuas(sisi){
    return sisi*sisi;
}

//fungsi untuk menghitung keliling persegi

function hitungKeliling(sisi){
    return 4 * sisi;
}

//fungsi utama untuk menampilkan hasil

function tampilkanPersegi(sisi){

    console.log("============ Persegi ==========");
    console.log("sisi               :", sisi);
    console.log("Luas persegi       :", hitungLuas(sisi));
    console.log("Keliling Persegi       :", hitungKeliling(sisi));
    console.log("===============================\n");
}

//panggilan fungsi
tampilkanPersegi(7);
tampilkanPersegi(23);

