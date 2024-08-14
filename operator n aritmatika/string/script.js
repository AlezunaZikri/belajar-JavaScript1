/*
oprator string kita membuatnya dengan tanda +
+ memiliki 2 fungsi = 1. jika operand nya angka dia menjadi operator aritmatika
                      2. jika operand nya string dia menjadi operator penggabung string
 */

// contoh 1
var a = 1,
    i = 2;
    // maka ini akan menjadi operator aritmatika karena tidak ada string
    console.log(a + i)

// contoh 2
var g = "apple",
    h = "pen";
    // maka ini akan menjadi operator penggabung string
    console.log(g+" "+h);

    // bagaimana kalau tipe data tring + tipe data number
    var k = 10,
        m = "20";
        //  maka hasilnya akan 1020
        //  sring + number = string
        //  number + number = number
        console.log(k + m);