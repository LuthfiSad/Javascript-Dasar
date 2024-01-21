// this
// var a = 10;
// console.log(window.a);
// window = this


// Membuat object(method/function) part 2



// cara 1. - function declaration
// 
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// in declaration this mengembalikan object secara global



// cara 2. object literal
// 
var obj = {
    a: 10,
    nama: 'luthfi'
};
obj.halo = function () {
    console.log(this);
    console.log('halo');
}
obj.halo();
// in object literal this mengembalikan object yang bersangkutan



// cara 3. constructor function
// 
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// in constructor this mengembalikan object yang baru dibuat