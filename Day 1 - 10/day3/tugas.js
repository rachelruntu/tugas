// // solveit#13
// var massa=89
// var tinggi=1.73
// var imt=massa/(tinggi**2)

// if(imt<=18.5){
//     console.log('berat anda kurang')
// }else if(imt>18.5&&imt<25){
//     console.log('ideal')
// }else if(imt>=25&&imt<30){
//     console.log('sangat berlebih')
// }else{
//     console.log('obesitas')
// }

// // solveit
// let alaskaki= 'sepatu';
// let harga= 'murah';
// let warna= 'merah';

// switch (true) {
//     case (alaskaki == 'sepatu' && 'murah' && warna == 'merah'):
//         console.log('Saya suka sepatu murah berwarna merah.');
//         break;
//     case (alaskaki == 'sepatu' && 'mahal' && warna == 'merah'):
//         console.log('Saya suka sepatu mahal berwarna merah');
//         break;
//     case (alaskaki == 'sepatu' && 'murah' && warna == 'biru'):
//         console.log('Saya suka sepatu murah berwarna biru');
//         break;
//     case (alaskaki == 'sepatu' && 'mahal' && warna == 'biru'):
//         console.log('Saya suka sepatu mahal berwarna biru')
//         break;
//     case (alaskaki == 'sandal' && 'murah' && warna == 'merah'):
//         console.log('Saya suka sandal murah berwarna merah');
//         break;
//     case (alaskaki == 'sandal' && 'mahal' && warna == 'merah'):
//         console.log('Saya suka sandal mahal berwarna merah');
//         break;
//     case (alaskaki == 'sandal' && 'murah' && warna == 'biru'):
//         console.log('Saya suka sandal murah berwarna merah');
//         break;
//     case (alaskaki == 'sandal' && 'mahal' && warna == 'biru'):
//         console.log('Saya suka sandal murah berwarna biru');
//         break;

// }

// solveit#11

let date = new Date()
let month=date.getMonth()

console.log('Saat ini bulan ' + month)


if (month == 0){
    console.log('Januari')
}
else if (month == 1){
    console.log('Februari')
}
else if (month == 2){
    console.log('Maret')
}
else if (month == 3){
    console.log('April')
}
else if (month == 4){
    console.log('Mei')
}
else if (month == 5){
    console.log('Juni')
}
else if (month == 6){
    console.log('July')
}
else if (month == 7){
    console.log('Agustus')
}
else if (month == 8){
    console.log('September')
}
else if (month == 9){
    console.log('Oktober')
}
else if (month == 10){
    console.log('November')
}
else if (month == 11){
    console.log('Desember')
}

// solveit#12
let date = new Date()
let month = date.getMonth()

if (month == 0){
    console.log('Minggu')
}
if (month == 1){
    console.log('Senin')
}
if (month == 2){
    console.log('Selasa')
}
if (month == 3){
    console.log('Rabu')
}
if (month == 4){
    console.log('Kamis')
}
if (month == 5){
    console.log('Jumat')
}
if (month == 6){
    console.log('Sabtu')
}

console.log('hari '+month)