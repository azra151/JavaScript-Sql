function bagiAngka(a,b){
    let hasil = a / b;
    console.log("Hasil Pembagian :", hasil);
}

let angka1 = 10;
let angka2 = 0;

bagiAngka(angka1, angka2);

console.log("Program Seleasi");

angka2 = 5;

bagiAngka(angka1, angka2);

console.log("");

try{
    console.log(angka1, angka2);
}catch(error){
    console.log("Error: " + error.message);
}
