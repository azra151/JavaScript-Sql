let Headset = 225000;
let mouse = 150000;
let keyboard = 350000;

let totalBelanja = Headset + mouse + keyboard;
let diskon = 0.10;
let hargaDiskon = totalBelanja * diskon;
let totalSetelahDiskon = totalBelanja - hargaDiskon;
let pembayaran = 800000;
let kembalian = pembayaran - totalSetelahDiskon;


console.log("===== Rincian Pembelian =====")
console.log("Headset = ", Headset);
console.log("Mouse = ", mouse);
console.log("Keyboard = ", keyboard);
console.log("");
console.log("Total Belanja= ", totalBelanja);
console.log(`Diskon = ${diskon*100}%`);
console.log("Total Setelah Diskon =  ", totalSetelahDiskon);
console.log("Pembayaran = ", pembayaran);
console.log("Kembalian = ", kembalian);