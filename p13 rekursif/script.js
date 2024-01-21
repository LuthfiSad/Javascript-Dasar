// rekursif sebuah function / fungsi yang memamnggil dirinya sendiri
function angka(n) {

    // contoh base case / supaya rekursif bisa berhenti
    if (n == 0) {
        return;
    }
    //

    console.log(n);

    // contoh rekursif
    return angka(n - 1);
    //
}
angka(10);