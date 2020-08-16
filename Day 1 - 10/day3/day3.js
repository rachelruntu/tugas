//Logic If & Switch

var x = 5
var y = '5'
console.log (x == y) // true -value sama tapi data type beda
console.log (x === y) // false -value & data type sama
console.log (x > y) // false -lebih dari
console.log (x >= y) // true -kurang dari
console.log (x < y) // false -lebih dari sama dengan
console.log (x <= y) // true -kurang dari sama dengan
//boolean

var x = 5;
var y = '5';
var z = 6;
console.log(x===y && y<z); // false -salah satu false, maka false
console.log(x===y || y<z); // true -satu saja true, maka true
console.log(!x===y || y<z); // true -membalik logika true/false (jika bukan x===y mk true)
console.log(y<z) // true
//boolean

if (condition) {program;}
else if (condition) {program;}
else {program;}

var job = 'guru'
switch (job) {
    case 'guru' : //seperti else if
        break; // harus pakai break
    case 'supir' :
        break; 
    case 'polisi' :
        break;
    default: //seperti else
}










// var angka=60

// if(angka>60){
//     console.log('boleh lah lu pada')
// }else if(angka<=60 && angka>=40){ // ini bukan 40>=x<=60
//     console.log('remedial')
// }else{
//     console.log('tinggal kelas')
// }

// var job="guru"==='guru'
// console.log(job)

// var job='guru'
// switch (job) {
//     case 'guru':
//         console.log('kerjaannya ngajar')
//         break;
//     case 'sopir':
//         console.log('kerjaannya nyetir')
//         break;
//     case 'polisi':
//         console.log('kerjaannya nilang')
//         break;
//     default:
//         console.log('ada aja kerjaannya')
//         break;
// }