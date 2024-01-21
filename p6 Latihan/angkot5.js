var z = 10;
var y = 6;
for (var x = 1; x <= z; x++) {
    if (x <= y) {
        console.log('Angkot No. ' + x + ' Berhasil dengan baik');
    } else if (x == 8 || x == 10) {
        console.log('Angkot No. ' + x + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + x + ' Sedang tidak beroperasi');

    }
}