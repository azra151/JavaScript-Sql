console.log("urut alfabetis");
let nama = ["azra","markus","haris","adam"];
nama.sort();
console.log(nama);
console.log("");


console.log("urut descending");
let angkaDesc = [40, 100, 1, 5, 25, 10];
angkaDesc.sort(function(a,b){
    return b = a;
});
console.log(angkaDesc);
console.log("");


console.log("urut object");
let siswa = [
    {nama : "Ali", nilai : 85},
    {nama : "Budi", nilai : 92},
    {nama : "Cici", nilai : 75},
];

siswa.sort((a,b) => b.nilai - a.nilai);
console.log(siswa);