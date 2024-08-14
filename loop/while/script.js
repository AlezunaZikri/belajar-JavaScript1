// apa sih pengulangan pada js

//penulisan while
/*
while (kondisi){
    aksi
}
selama kondisi bernilai true maka lakukan aksi dalam blok
*/

// ex
// while(true){
//     console.log("hallo dunia")
// }
// ini namanya infinity loop / looping forever

/*
terus gimana cara menghentikannya 
1- dihentikan oleh user
2- dihentikan program kita sendiri
*/

// cara 1
// var ulang = true;
// while(ulang === true){
//     console.log("hello-woi")
//     ulang = confirm('lagi')
// }

//cara 2
/*
nilai awal
while(kondisi terminasi){
    aksi

    increment(+) / decrement(-)
}
*/

//ex
// var nilaiAwal = 1;
// while (nilaiAwal <= 11){
//     console.log('halo bumi')
//     nilaiAwal = nilaiAwal + 1;
// }


// var nilaiAwal = 1;
// while(nilaiAwal <= 5){
//     console.log('heloo-aja ' + nilaiAwal + ' kali')
//     nilaiAwal++; //nilaiAwal+1
// }


//ex1
let nomorBecak = 1;
while (nomorBecak <= 10) {
  console.log("Becak no " + nomorBecak + " beroperasi dengan baik");
  nomorBecak++;
}


//ex2
// let nomorOjek = 1,
// let jmlOjek =10;
// while (nomorOjek <= jmlOjek){
//     console.log("ojek " + nomorOjek + ' telah mengantar penumpang');
//     nomorOjek++;
// }
