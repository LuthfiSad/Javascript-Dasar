// Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    // properti
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // method
    // ketika penumpang naik
    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang)
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang
                    return this.penumpang;
                } else if (this.penumpang[i] == namaPenumpang) {
                    console.log(namaPenumpang + ' Sudah Ada');
                    return this.penumpang
                } else if (i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang)
                    return this.penumpang;
                }
            }
        }
    }
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            console.log('Angkot Masih Kosong!');
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    console.log(namaPenumpang + ' Tidak Terdata Diangkot');
                }
            }
        }
    }

}
var angkot1 = new Angkot('anjay', ['cikokol', 'cileduk'], [], 0);
var angkot2 = new Angkot('mabar', ['citayem', 'fashion', 'week'], [], 0);