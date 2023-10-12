// Penggunaan if, else, dan nested if
let nilai = 85;
if (nilai >= 90) {
    console.log("Nilai Anda A");
} else if (nilai >= 80) {
    console.log("Nilai Anda B");
} else {
    console.log("Nilai Anda C");
}

// Penggunaan switch case
let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Hari ini Senin");
        break;
    case "Selasa":
        console.log("Hari ini Selasa");
        break;
    default:
        console.log("Hari ini bukan Senin atau Selasa");
}

// Penggunaan for statement
console.log("Menggunakan for statement:");
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}

// Penggunaan while loop
console.log("Menggunakan while loop:");
let counter = 1;
while (counter <= 5) {
    console.log("Perulangan ke-" + counter);
    counter++;
}

// Penggunaan do-while loop
console.log("Menggunakan do-while loop:");
let angka = 1;
do {
    console.log("Perulangan ke-" + angka);
    angka++;
} while (angka <= 5);

// Penggunaan function
function tambah(a, b) {
    return a + b;
}

let hasilPenjumlahan = tambah(3, 5);
console.log("Hasil penjumlahan: " + hasilPenjumlahan);
