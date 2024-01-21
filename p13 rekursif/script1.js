// menggunakan rekursif
function faktorial(n) {
    if (n == 0) return 1;
    return n * faktorial(n - 1);
}
console.log(faktorial(5));

//menggunakan looping
// function faktorial(n) {
//     var hasil = 1;
//     for (var i = n; i > 0; i--) {
//         hasil *= i;
//     }
//     return hasil;
// }
// console.log(faktorial(4));


// fungsi rekursif
// menggantikan looping
// fibonacci
// pencarian dan penelusuran pada struktur data list dan Tree
// bahasa pemrograman yang tidak memiliki pengulangan = haskell, erlang, prolog, dll