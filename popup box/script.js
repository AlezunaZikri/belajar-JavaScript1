/*
popup box
-alert
-prompt
-confirm
*/

// alert box utk menampilkan pesan sederhana

// kita bisa membuat alert lebih dari satu
// alert("hay");
// alert("namaku bom-bom");
// alert("apa kabar kalian");
// alert("aku berharap kita bersatu");

// proupt box bisa memasukkan inputan
// sebenarnya pop up prompt iru mengambalikan nilai apapun yg kita tulis

// prompt("cak masukkan");

// harus ada wadah penampung
// var i = prompt('masukkan nama ;')
//     alert(i);

// confirm box gunanya utk meminta konfirmasi kpd user
// var tes = confirm (" apakah kamu gay?");
// //  alert(tes);
//     if (tes == true){
//         alert("user adalah seorang gay");
//     }else{
//         alert("ternyata user kita tidak gay");
//     }

// aplikasi sederhana
alert("selamat datang kawan-kawan");
var coba=true;

while(coba == true){
    var nama = prompt('masukkan nama:');
    alert("halo"+" "+ nama)

    coba = confirm('coba lagi')
}
alert("trims...");

