// var obj={
//     nama:['makanan','punya'],
//     umur:23,
//     namaumur(){
//         return this.nama+this.umur
//     }
// }

// //obj.umur.push('umur') //harus pakai []
// obj.nama.push('rahel')
// console.log(obj.nama)

// class Human{
//     constructor(a,b,c){
//         this.name=a
//         this.age=b
//         this.job=c
//     }

//     buatkalimat=()=>{
//         return 'nama saya ' + this.name + 'umur ' + this.age + 'pekerjaan' + this.job
//     }
// }
// var arrmanusia=[]
// arrmanusia.push(new Human('dino',23,'guru'))
// arrmanusia.push(new Human('robin',19,'else'))
// console.log(arrmanusia)

// var dino=new Human('robin',19,'else')
// var robin=new Human('robin',19,'else')
// console.log(dino)
// console.log(robin)


//////////////////////////////////////////////////////
//kelas guru dapat keturunan dari human
//guru menerima warisan dari human
//super () dr human


class Human{
    constructor(a,b,c){
        this.name=a
        this.age=b
        this.job=c
    }

    buatkalimat=()=>{
        return 'nama saya ' + this.name + 'umur ' + this.age + 'pekerjaan' + this.job
    }
}

class Student extends Human{
    constructor(a,b,_nilai){
        super(a,b)
        this.nilai=_nilai

    }
}
class Guru extends Human{
    constructor(a,b,_kerja){
        super(a,b)
        this.kerja=_kerja

    }
}

var dino=new Guru('dino',23,'guru')
var robin=new Student('robin',19,60)

console.log(dino)
console.log(robin)



