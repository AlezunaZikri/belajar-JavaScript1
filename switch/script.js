/*
switch ini sama aja kayak if dan else
syntax nya


switch(ekspresi){
    case "nilai 1":
        aksi 1
        [break;]
        case "nilai 2":
            aksi 2
            [break;]
            default;
            aksi default
            [break;]
}
*/




//ex else & if
// var angka = (parseInt(prompt('masukkan angka : ')));
// if (angka === 1 ){
//     alert('anda memasukkan angka 1');
// }else if(angka === 2){
//     alert('anda memasukkan angka 2');
// }else if(angka === 3){
//     alert('anda memasukkan angka 3');
// }else{
//     alert('anda memasukkan angka yang salah')
// }


// tes switch
// var angka = (parseInt(prompt('masukkan dulu bro!')));

// switch(angka){
//     case 1: //harus nilaiv
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('yah..., anda salah memasukkan angka');
//         break;
// }

// tes
var rpl = prompt('coba masukkan temanmu di X RPL')
switch(rpl){
    case 'rifqy':
        alert('dia teman yang tidak baik untuk mu')
        break;
    case 'adrian':
        alert('yang satu ini agak freak')
        break;
    case 'kinan':
        alert('yang satu ini sangat dingin....')
        break;
    case 'faiz':
        alert('kamu bisa belajar bahasa inggris dengannya')
        break;
    case 'raja':
        alert('hati-hati!... kamu bisa diajak olehnya menuju NU::before dan ::after')
        break;
    case 'bagas':
        alert('ini adalah penjoki handal kita')
        break;
    case 'farros':
        alert('hati-hati , dia WIBU')
        break;
    default:
        alert('yah.. kasihan . mungkin nama temanmu belum terdaftar disini')
        break;
}
