// Membuat object

// 1. object literal
var mhs = {
    nama: "Luthfi", //mhs.nama
    umur: "18", //mhs.umur
    ips: [3.50, 3.60, 3.70], //mhs.ips[i]
    alamat: {
        jalan: "Jl. gimank no. 123", //mhs.alamat.jalan
        kota: "San Andreas", //mhs["alamat"]["kota"]
        provinsi: "Jawa Barat" //mhs.alamat["kota"]
    }
}

var mhs1 = {
    nama: "anjas", //mhs.nama
    nrp: '0898989890', //mhs.nrp
    email: 'anjas@gmail.com',
    jurusan: "Teknik Mesin"
}

var mhs2 = {
    nama: "kelaz", //mhs.nama
    nrp: '0893287412', //mhs.nrp
    email: 'kelaz@gmail.com',
    jurusan: "Teknik Informatika"
}

// 2. function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan
    return mhs;
}
var mhs3 = buatObjectMahasiswa("koplak", '02424324323', "koplak@gmail.com", "Teknik Menjait"); //mhs3

var mhs4 = buatObjectMahasiswa("gemink", '04324545656', "gemink@gmail.com", "Teknik ancang-ancang"); //mhs4


// constructor Function : Yang paling sering di gunakan oleh programmer anjay
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan
}

var mhs5 = new Mahasiswa("asshoy", '05897847234', "asshoy@gmail.com", "Teknik Ancaman"); //mhs5
var mhs6 = new Mahasiswa("geboy", '07878548784', "geboy@gmail.com", "Teknik Jarak Jauh"); //mhs6



// Membuat object(method/function) part 2


// cara 1. - function declaration
// 
// function halo() {
//     console.log('halo');
// }
// halo();


// cara 2. object literal
// 
// var obj = {};
// obj.halo = function () {
//     console.log('halo');
// }
// obj.halo();


// cara 3. constructor function
// 
// function Halo() {
//     console.log('halo');
// }
// new Halo();