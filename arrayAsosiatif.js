let data = [
    {nama: "Rose", tinggi: 178 },
    {nama: "Magnolia", tinggi: 153},
    {nama: "Daisy", tinggi: 165 },
    {nama: "Jasmine", tinggi: 161 },
    {nama: "Violet", tinggi: 159 }
]
data.forEach(function(item,i){
    console.log(`${i+1}  nama ${item.nama} memiliki tinggi ${item.tinggi} `);
})


