var ulang = true;
while (ulang == true) {
    var angka = prompt('Masukan angka ?....');
    if (angka % 2 == 0) {
        alert(angka = ' Adalah Bilangan Genap');
    } else if (angka % 2 == 1) {
        alert(angka = ' Adalah Bilangan Ganjil');
    } else {
        alert('Yang anda masukan bukan angka!');
    }
    ulang = confirm('apakah anda ingi mengulanginya?');
}

//parseInt di gunakan untuk mengubah menjadi integer
// var angka = parseInt(prompt('Masukan angka ?....'));
// if (angka === 1) {
//     alert('anda memasukan angka 1');
// } else if (angka === 2) {
//     alert('anda memasukan angka 2')
// } else if (angka === 3) {
//     alert('anda memasukan angka 3')
// } else {
//     alert('angka yang anda masukan salah!');
// }


var z = 10;
var y = 7;
for (var x = 1; x <= z; x++) {
    if (x <= y) {
        console.log('Angkot No. ' + x + ' Berhasil dengan baik');
    } else {
        console.log('Angkot No. ' + x + ' Sedang tidak beroperasi');
    }
}