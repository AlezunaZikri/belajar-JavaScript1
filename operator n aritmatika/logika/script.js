/*
oprator logika
&& = AND
|| = OR
!  = NOT
*/

// && dua duanya harus true
var o = 10,
    p = 11;
console.log(o % 2 == 0);
console.log(p % 2 == 0);
console.log( (o % 2 == 0) && (p % 2== 0 ));

//  || asal salah satu aja bener pasti true
console.log((o + 10 == 20) || (p < 1));

// !
console.log(p < 20);
// console.log(!(o < 20));