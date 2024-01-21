function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

console.log(tambah(3, 4, 5, 8, 10));