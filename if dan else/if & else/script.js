/* if else

rumus if(kondisi){
    aksi "lakukan aksi jika kondisi bernilai true"
}... "keluar dr blok jika kondisi false"
*/

//ex
// var angka =prompt('masukkan angka!');
// if (angka % 2 === 0){
//     alert('angka ini genap');  // jika angka false maka dia keluar dari blok
// }else{
//     alert('angka ini ganjil');
// }





//tes singkat

// for (let i = 1; i <= 12; i++) {
//     if (i >= 7 && i <= 12) {
//       console.log(`Bus no ${i} tidak beroprasi dengan baik`);
//     } else {
//       console.log(`Bus no ${i} beroprasi dengan baik`);
//     }
//   }


  //sendiri panjang
// var jmlOjek = 10;
// var ojekJalan = 6;
// var noOjek = 1;

// for (var noOjek = 1; noOjek<=jmlOjek; noOjek++){
//     if(noOjek<=6){
//         console.log('Ojek no ' +noOjek+' beroprasi dengan baik')
//     }else{
//         console.log('Bus no ' +noOjek+ ' tidak beroprasi dengan baik')
//     }
// }



//seklai lagi
var untaKu = 15;
var untajalan = 8;
var noUnta = 1;

for (var noUnta = 1 ; noUnta<=untaKu; noUnta++){
    if(noUnta<=8){
        console.log('Unta ku yg ke: '+noUnta+' Sehat-Sehat aja')
    }else{
        console.log('Untaku yg ke: '+noUnta+' dalam sedang Sakit')
    }
}