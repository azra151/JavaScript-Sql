let nasigoreng = 25000;
let miegoreng = 22000;
let capcay = 32000;

console.log("Harga Nasi Goreng : RP.", nasigoreng);
console.log("Harga Nasi Goreng : RP.", miegoreng);
console.log("Harga Nasi Goreng : RP.", capcay);

console.log("Harga Total : RP.", nasigoreng + miegoreng + capcay);
let hargaTotal = 79000;
let diskon = 0.10;
let TotalDiskon = hargaTotal * diskon;
let hargaSetelahDiskon = hargaTotal - TotalDiskon;
let pembayaran = 100000;
let kembalian = pembayaran - hargaSetelahDiskon


console.log(`diskon = ${diskon*100}%`);
console.log("Harga setelah diskon = ",hargaSetelahDiskon);
console.log("Pembayaran = ", pembayaran);
console.log("Kembalian = ", kembalian);