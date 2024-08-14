/*
tipe data number
didalam tipe data number itu bilamgannya floating point(bilangan pecahan) dan
ukuran angka yang bisa ditampung js itu 64-bit (10 x 1 miliar miliar)
ada beberapa angka didalam tipe data number
*/

/*
angka tanpa desimal (integer) 10, 1500, 1234567
(akurat sampai 15 digit)
*/
var i = 10;
console.log(i);
var b = 999999999999999;
console.log(b);
var n = 99999999999999999999;
console.log(n);

/*
angka dengan desimal 3.14, 0.5, 100.00 (dialam js koma(,) diganti dengan menggunakan titik (.))
(maximal kita hanya bisa menyimpam 17 digit dibelakang koma)
*/

var $k = 12.6799;
console.log($k);
var $j = 20.00;
console.log($j);
var $digit = 23.4567891234567890123456789;
console.log($digit);

/*
tapi hati2 dalam menggunakan bilangan pecahan
karena terkadang hasilnya tidak sesuai dengan yg kita harapkan
*/

var $p = 0.3 + 0.7 ;
console.log($p);
var _n = 0.1 + 0.2 ;
console.log(_n);   // outputnya 0.30000000000000004 karena ada bilangan yg lebih kecil lagi kelipatannya


/*
ada angka spesial dalam js
Infinity
-Infinity
NaN
*/

// infinity terjadi ketika bilangan positif / 0
var z = 2 / 0;
console.log(z);
// -infinity terjadi ketika bilangan minus / 0
var v = -10 / 0;
console.log(v);
// NaN terjadi ketika 0 / 0
var x = 0 / 0;
console.log(x);
// NaN terjadi ketika number / string
var s = 5 / "syayid"
console.log(s);

/* catatan
apabila nilai angka yg dijadikan string dibagi dibagi angka number
maka angka tersebut akan menjadi number
 */
var angkaNumber = 10,
    numberAngka = "10";
    console.log(angkaNumber / numberAngka);