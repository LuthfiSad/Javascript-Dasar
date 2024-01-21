// ParseInt agar tidak mengambil nilai string, tetapi integer
var kubus1 = parseInt(prompt('Berapakah Sisi Kubus Yang Pertama'));
var kubus2 = parseInt(prompt('Berapakah Sisi Kubus Yang Kedua'));

// Function Lebih simple dari folder p10 function
function VolumeKubus(s) {
    return s * s * s;
}
var jumlah = VolumeKubus(kubus1) + VolumeKubus(kubus2);
alert('Volume Kubus pertama : ' + VolumeKubus(kubus1) + '\nVolume Kubus Kedua : ' + VolumeKubus(kubus2) + '\nJumlah Volume Antara Dua Kubus Tersebut Adalah : ' + jumlah);