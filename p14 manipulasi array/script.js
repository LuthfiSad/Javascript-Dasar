// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[1] = "Muhamad";
// arr[2] = "Luthfi";
// arr[6] = "Sadli";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Muhamad", "Luthfi", "Sadli"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Muhamad", "Luthfi", "Sadli"];
// console.log(arr);
// console.log(arr.length - 1);
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i])
// }



// Method pada array
var arr = ['Muhamad', 'Luthfi', 'Sadli', 'XI', 'RPL', 1];

// 1. join
// contoh .join('pemisah nya seperti : koma spasi atau titik dll')
// console.log(arr.join(' '));
// hasil : Muhamad Luthfi Sadli XI RPL 1

// 2. push(menambahkan array paling belakang) & pop(menghapus array yang paling belakang)
// push & pop berpengaruh di depan
// arr.push('gokil', 'anjay');
// console.log(arr.join(' - '));
// hasil : Muhamad - Luthfi - Sadli - XI - RPL - 1 - gokil - anjay
// 
// arr.pop();
// console.log(arr.join(' - '));
// hasil : Muhamad - Luthfi - Sadli - XI - RPL


// 3. unshift(menambahkan array paling depan) & shift(menghapus array yang paling depan)
// unshift & shift berpengaruh di depan
// arr.unshift('gokil', 'anjay');
// console.log(arr.join(' - '));
// hasil : gokil - anjay - Muhamad - Luthfi - Sadli - XI - RPL - 1
// 
// arr.shift();
// console.log(arr.join(' - '));
// hasil : Luthfi - Sadli - XI - RPL - 1

// 4. splice(menambahkan array dimanapun sesuai indexAwal)
// contoh .splice(key/indexawal, mauDihapusberapa, mauDitambahelement1, mauDitambahelement2, ...mauDitambahelementn)
// arr.splice(3, 2, 'Anjay', 'Mabar');
// console.log(arr.join(' - '));
// hasil : Muhamad - Luthfi - Sadli - Anjay - Mabar - 1

// 5. slice(mengambil / mengcopy element array)
// slice(awal, akhir)
// var arrslice = arr.slice(2, 4);
// console.log(arr.join(' - '));
// console.log(arrslice.join(' - '));
// hasil : Sadli - XI

// 6. foreach(sama seperti for cuman lebih simple)
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// contoh foreach
// angka.forEach(function (e) {
//     console.log(e);
// });
// hasil : 1 2 3 4 5 6 7 8
// 
// foreach menggunakan function expresion
// var cetak = function (e) {
//     console.log(e);
// }
// angka.forEach(cetak);
// 
// contoh for : 
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
var nama = ['muhamad', 'luthfi', 'sadli'];
// contoh foreach2
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
// })
// hasil Mahasiswa ke-1 adalah : muhamad.....

// 7. map(mengembalikan nilai ke variable/array baru)
var angka = [1, 2, 5, 3, 6, 8];
// angka2 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka2.join(' - '));
// hasil : 2 - 4 - 10 - 6 - 12 - 16
// 
// jika menggunakan foreach akan error karena foreach tidak mengembalikan nilai
// angka.map(function (e) {
//     console.log(e.join(' - '));
// })

// 8. sort(mengurut array)
var angka = [1, 2, 10, 5, 20, 3, 6, 8];
// contoh mengurut yang benar
// angka.sort(function (a, b) {
//     return a - b;
// })
// console.log(angka.join(' - '));
// hasil : 1 - 2 - 3 - 5 - 6 - 8 - 10 - 20
// 
// contoh mengurut dari angka depannya
// angka.sort();
// console.log(angka.join(' - '));
// hasil : 1 - 10 - 2 - 20 - 3 - 5 - 6 - 8

// 9. filter
var angka = [1, 2, 10, 5, 20, 3, 6, 8];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// })
// console.log(angka2.join(' - '));
// hasil: 10 - 20 - 6 - 8

// 10. find(hanya mengembalikan 1 nilai yag paling awal)
var angka2 = angka.find(function (x) {
    return x > 5;
})
console.log(angka2);
// tidak bisa menggunakan join karena mengembalikan nilai bukan array
// console.log(angka2.join(' - '));