//EXPLORING
'String and Numbers'

'variable' // are named containers and can store any type of javascript values/data
'for example' = 'var,let,this,conts,etc'

//var ambil ram yang banyak tapi bisa menyimpan data cukup banyak dan bisa redeclared atau updated
//let kebalikannya var dan tdk bisa redeclared tp bisa updated fungsinya sama 
//const cannot be updated or redeclared, this will make error

var nama = 'rachel' ;
console.log(nama)

// names rules : ``${} || ''+
/*
.KOMENTAR MULTILINE
*/

'Data types'
let nama = 'Rachel' ;
let usia = 22 ;
let jomblo = true ;
let kerja;

//typeof itu menampilkan penjelasan 'string,number,boolean,undefined'

console.log(typeof(nama)); //string - kumpulan char, text
console.log(typeof(usia)); //number - integer/float
console.log(typeof(jomblo)); //boolean - logic data type, true/false

console.log(typeof(kerja)); //undefined - variabel tanpa value
console.log(kerja); //undefined 
// null,symbol is also the data types

// 'STRINGS'
var x = 'Halo Dunia'
console.log(x.length) ; //menghitung jumlah huruf dan spasi = 10
console.log(x.indexOf('Dunia')) ; //menghitung jumlah huruf yang ada dalam string
console.log(x.substr(5, 3)) ; //dari perhitungan 1-5 lalu 3 huruf setelahnya = Dun
console.log(x.slice(5, 8)) ; // = Dun ???
console.log(x.split('')) ; // split per huruf 

var x = 'halo' ;
var y = 'DUNIA' ;
var z = 12345 ;

console.log(x.toUpperCase()); //CAPS string
console.log(y.toLowerCase()); //unCAPS string
console.log(x.replace('ha', 'mi')) //'ha' diganti mjd 'mi'
console.log(x.replace(/ha/g, 'mi')) //untuk setiap 'ha' yang ada (/g) terganti mjd 'mi'
console.log(z.toString()) ; //tetap angka tetapi string
console.log(typeof(z.toString())) ; //check dia string

//Convert Strings to Numbers
let a =parseInt('123') ; //jadi number
let b =parseFloat('123') ;

let c =parseInt('1234.5678') ; //hanya sampai titik
let d =parseFloat('1234.5678') ; //bisa semua

let e =parseInt('Halo Dunia') ; //NaN
let f =parseFloat('Halo Dunia') ; //Not a Number

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

var usiaAndi = 40
var usiaBudi = 20

console.log(usiaAndi * usiaBudi)
console.log(usiaAndi / usiaBudi)
console.log(usiaAndi + usiaBudi)
console.log(usiaAndi - usiaBudi)
console.log(usiaAndi % usiaBudi) //hasil pembagian jk 0 maka kembali ke 0
console.log(usiaAndi ** usiaBudi) //pangkat dua

// ++ = +1 || -- = -1

//MATH
console.log(Math.PI) ;
console.log(Math.abs(-4.7)) ; //minus=plus
console.log(Math.pow(8, 2)) ; //8** atau 8 pangkat 2
console.log(Math.sqrt(64)) ; //akar 2
console.log(Math.cbrt(8)) ; //akar 3

console.log(Math.round(4.7)) ; //5 rounded nearest integer
console.log(Math.round(4.4)) ; //4 
console.log(Math.floor(4.7)) ; //4 less
console.log(Math.ceil(4.4)) ; //5 greater

console.log(Math.random()) ; //Keluarkan angka random 0. 
console.log(Math.max(1,3,5)) ; //Angka terbesar
console.log(Math.min(1,3,5)) ; //Angka terkecil

//BASIC DATE OBJECT
let a = new Date() ; //?
console.log(a.getFullYear()) ; //2020
console.log(a.getMonth()) ; //6 - Mulai dari 0
console.log(a.getDate()) ; //26
console.log(a.getDay()) ; //0 - Mulai dari 0
console.log(a.getHours()) ; // 16
console.log(a.getMinutes()) ; // 56
console.log(a.getSeconds()) ; // 10
console.log(a.getMilliseconds()) ; // 834

//berdasarkan jam laptop

var tanggal=new Date()
var datetangga=tanggal.getDate()
var bulan=tanggal.getMonth()+1
var tahun=tanggal.getFullYear()
var jam=tanggal.getHours()
var menit=tanggal.getMinutes()
console.log(`${datetangga}/${bulan}/${tahun}\n${jam}:${menit}`)

// var x=4
// var y=3
// var z=2
// console.log(Math.pow((x+y*z)/(x*y), z))

// var tanggal=n


