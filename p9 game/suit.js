var ulang = true;
while (ulang) {
    // menangkap pilihan player
    var p = prompt('pilih : gunting, batu, kertas');

    // menangkap pilihan komputer

    // membangkitkan bilangan random
    var k = Math.random()

    if (k < 0.34) {
        k = 'gunting';
    } else if (k >= 0.34 && k < 0.67) {
        k = 'batu';
    } else {
        k = 'kertas';
    }
    // menentukan rules
    var hasil;
    if (p == k) {
        hasil = 'SERI!';
    } else if (p == 'gunting') {
        // if (k == 'kertas') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH!'
        // }

        //di dingkat
        hasil = (k == 'kertas') ? 'MENANG' : 'KALAH!'
    } else if (p == 'batu') {
        // if (k == 'gunting') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH!'
        // }

        //di dingkat
        hasil = (k == 'gunting') ? 'MENANG' : 'KALAH!'
    } else if (p == 'kertas') {
        // if (k == 'batu') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH!'
        // }

        //di dingkat
        hasil = (k == 'batu') ? 'MENANG' : 'KALAH!'
    } else {
        hasil = 'Error!!'
    }
    // tampilkan hasilnya
    alert('Kamu Memilih : ' + p + ' dan Komputer Memilih : ' + k + '\nMaka Hasilnya : ' + hasil);
    ulang = confirm('apakah anda ingin mengulanginya lagi???');
}
alert('Terima kasih sudah bermain.')