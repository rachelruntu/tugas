//  23/1/2018
//  11:51

var tanggal=new Date()
var datetangga=tanggal.getDate()
var bulan=tanggal.getMonth()+1
var tahun=tanggal.getFullYear()
var jam=tanggal.getHours()
var menit=tanggal.getMinutes()
console.log(`${datetangga}/${bulan}/${tahun}\n${jam}:${menit}`)

// SOLVE IT 1
let x = 4
let y = 3
let z = 2
console.log(Math.pow((x+y*z)/(x*y), z))

// SOLVE IT 3 
console.log(Math.sqrt(8))

// SOLVE IT 4

var harihari=485
var tahun=Math.floor(harihari/360)
var sisa=485%360
var bulan=Math.floor(sisa/30)
sisa%=30//sisa=sisa%30
var minggu=Math.floor(sisa/7)
sisa%=7
console.log(tahun,bulan,minggu,sisa)
// hari=485
// tahun=485/360
// bulan=(485-360)/30
// hari=(485-360)%30
// tahun1=(Math.floor(tahun))
// bulan1=(Math.floor(bulan))
// console.log(`pernyataan dalam bentuk \n ${tahun1} Tahun \n ${bulan1} Bulan \n ${hari} Hari`)

// SOLVE IT 5
var totalumur=49
var rasioadanb=0.4
var budi=49/(0.4+1)
var andi=totalumur-budi
console.log('budi',budi+2)
console.log('andi',andi+2)
// andi=4
// budi=10
// ratio=andi+budi
// totalusia=49
// hasil=totalusia/ratio
// usiaA=hasil*andi
// usiaB=hasil*budi
// console.log(usiaA+2,usiaB+2)

// SOLVE IT 6
var Today=('2017, 10, 17')
var Tommorow=('2017, 10, 18')
var Yesterday=('2017, 10, 16')
console.log(`Hari ini tanggal ${Today}
Besok tanggal ${Tommorow}
Kemarin tanggal ${Yesterday}`)

// SOLVE IT 7
var x='makanan'
console.log(x.length)

//SOLVE IT 8
let x=120
let keca=60
let kecb=40

var jamtominute=(120/(60+40))*60
var jam=Math.floor(jamtominute/60)
var menit=jamtominute%60
var jaminit=9
var menitinit=0
console.log('bertabrakan jam '+(jaminit+jam)+'.'+(menitinit+menit)+' WIB')
