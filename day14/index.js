// var a=0.6-0.2
// console.log(Math.floor(a))
// var b=a==0.3
// console.log(b)

//cek kekuatan password jangan pake simbol . harus huruf besar dan kecil dan number
//jangan pake regex

// let u=1
// let s=-1
// let t=1
// let b=-1
// var awal=0==u+u+s+t+b+s
// console.log(awal)


// var modus=[1,2,2,2,2,3,4,5,6,7,7,7]
// var a = {
//     1:1,
//     2:4,
//     3:1,
//     4:1,
//     5:1,
//     6:1,
//     7:3
// }

// if(modus.length>0){

// }
// for(var i = 0; i < array.length; i++){

// }

const ganjilgenap=(input)=>{
    var ganjilataugenap=input.split('')
    var nomorplat=ganjilataugenap[1]
    if(nomorplat%2==0){
        return 'platnya genap'
    }else{
        return 'platnya ganjil'
    }
}

var plat='b123kg'.replace(/\D/g,'')
console.log(plat)

console.log(ganjilgenap('B 1123 KVD'))
console.log(ganjilgenap('BH 1234 ED'))