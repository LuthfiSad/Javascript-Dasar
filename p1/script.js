alert('Kocag abis');
if (confirm('gokil') == true) {
    var nama = prompt('nama bozzz :')
    alert('Selamat datang ' + nama);
    var kocag = true;

    while (kocag == true) {
        nama = prompt('nama anda :');
        if (nama == null || nama == '') {
            alert('nama harus di isi bozzz');
        } else {
            alert('halo bang jago ngoding ' + nama);
            kocag = confirm('apakah anda mau lagi ??');
        }
    }
    alert('selamat tinggal');
} else {
    alert('yah ga gokil');
}