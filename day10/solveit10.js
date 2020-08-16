class SoalSoal{
    constructor(a,b,c){
        this.soal=a
        this.jawaban=b
        this.pilihan=c
    }
}

let soal =[
    new SoalSoal('Siapa presiden ketiga republik Indonesia?',0,['bj.habibie','abdurrahman','megawati','sby']),
    new SoalSoal('berikut adlh nama bahasa pemrograman',1,['phyton','javascript','html','typescript'])

]

const tampilkanSoal=()=>{
    let container=document.querySelector('ol')//tag gapake
    var output=''
    for(let i=0; i<soal.length; i++){
        output+=`<li>`
    }
}
