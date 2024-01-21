// var penumpang = ['luthfi', undefined, 'ujang', 'sandika'];
var penumpang = [undefined, "luthfi", undefined, "ujang"];
console.log(penumpang);
var tambahpenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang dari kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;

            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log('Maaf nama ' + namaPenumpang + ' Sudah Terdata');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}

var hapuspenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penupang turun
        console.log('Angkot Masih Kosong!');
        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika tidak ada nama yang sesuai
            else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahan
                console.log('Maaf nama ' + namaPenumpang + ' Tidak Terdata');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}