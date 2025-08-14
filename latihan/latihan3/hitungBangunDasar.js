function hitungLuasPersegi(sisi){
    return sisi*sisi;
}

//fungsi untuk menghitung keliling persegi

function hitungKelilingPersegi(sisi){
    return 4 * sisi;
}

//fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar ;
}
//fungsi untuk menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar) ;
}

//fungsi untuk menghitung luas lingkaran
  function hitungLuasLingkaran(r) {
    const phi = 22/7
  return phi * (r * r);
}
//fungsi untuk menghitung keliling lingkaran
    function hitungKelilingLingkaran(r) {
    const phi = 22/7
    return 2 * phi * r ;
}
//fungsi untuk menghitung luas segitiga sama sisi
function hitungLuasSegitigaSamasisi(alas, tinggi) {
  return 0.5 * alas * tinggi ;
}
//fungsi untuk menghitung keliling persegi panjang
function hitungKelilingSegitigaSamasisi(sisi) {
  return 3 * sisi ;
}

    console.log("");
    console.log("============ Luas Bangun Datar ==========");
    console.log("Luas persegi dengan sisi 8 Adalah ", hitungLuasPersegi(8));
    console.log(`Luas persegi panjang dengan sisi 9 dan lebar 3 Adalah  ${hitungLuasPersegiPanjang(9,3)}`);
    console.log(`Luas lingkaran dengan jari-jari 6 Adalah  ${hitungLuasLingkaran(6)}`);
    console.log(`Luas Segitiga sama sisi dengan alas 6 dan tinggi 4 adalah  ${hitungLuasSegitigaSamasisi(6,4)}`);
    console.log("");
    console.log("===============================\n");
    console.log("");
    console.log("Keliling persegi dengan sisi 8 Adalah ", hitungKelilingPersegi(8));
    console.log(`Keliling persegi panjang dengan sisi 9 dan lebar 3 Adalah  ${hitungKelilingPersegiPanjang(9,3)}`);
    console.log(`Keliling lingkaran dengan jari-jari 6 Adalah  ${hitungKelilingLingkaran(6)}`);
    console.log(`Keliling Segitiga sama sisi dengan alas 6 dan tinggi 4 adalah  ${hitungKelilingSegitigaSamasisi(6,4)}`);
