/*

if(kondisi 1){
    aksi
}else if (kondisi 2){
    aksi 2
}else{
    aksi 3
}

*/

//ex lagi
// var angka= prompt('masukkan angka: ')
// if (angka % 2 === 0 ){
//     alert('bilangan ini genap cuy');   //jika angka false maka ia keluar dari blok
// }else if(angka % 2 === 1){
//     alert('bilangan ini ganjil kan?');
// }else{
//     alert('yang ini bukan angka kan?')
// }



//latihan sendiri.
// var jmlTembak = 20;
// var noTembak =1;
// for (var noTembak=1; noTembak<=jmlTembak;noTembak++){
//     if(noTembak<=5){
//         console.log('tembak ke-'+noTembak+' berjenis AK47')
//     }else if(noTembak<=10){
//         console.log('tembak ke-'+noTembak+' berjenis MP5')
//     }else if(noTembak<=15){
//         console.log('tembak ke-'+noTembak+' berjenis XM8')
//     }else{
//         console.log('tembak ke-'+noTembak+' berjenis MP40')
//     }
// }


// tes lagi
var jmlpasien = 11;
var noPasien = 1;
for(var noPasien=1; noPasien<=jmlpasien; noPasien++){
    if(noPasien <=4){
        console.log('pasien yang ke-'+noPasien+' sudah sehat')
    }else if(noPasien<=6){
        console.log('pasien yang ke-'+noPasien+' sekarat')
    }else if(noPasien<=10){
        console.log('pasien yang ke-'+noPasien+' masih sakit')
    }else{
        console.log('pasien yang ke-'+noPasien+' sekarat')
    }
}