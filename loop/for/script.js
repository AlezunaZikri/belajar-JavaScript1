/*

looping for

rumus for

for( ; ; ){
    aksi
}

*/

// for(var nilaiAwal = 1; nilaiAwal<=10; nilaiAwal++){
//     console.log("halo deek " + nilaiAwal+ ' x')
// }

//tes gpt
// for (let i = 1; i <= 11; i++) {
//     if (i >= 8 && i <= 11) {
//       console.log(`Taxi no ${i} tidak beroprasi dengan baik`);
//     } else {
//       console.log(`Taxi no ${i} beroprasi dengan baik`);
//     }
//   }

//latihan
var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroprasi){
    console.log("angkot no "+noAngkot+" beroprasi dengan baik")
    noAngkot++;
}

for(var noAngkot=7; noAngkot<=jmlAngkot; noAngkot++){
    console.log("angkot no "+noAngkot+" tidak beroprasi dengan baik")
}