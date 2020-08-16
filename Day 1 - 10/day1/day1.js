// //INTRODUCTION
// "Application Development"

// `is the process of creating a computer program`
// step: // gathering requirements, designing prototypes, coding, testing, implementation, and integration.

// 'This is teach you how to think'

// 'JAVASCRIPT'
// '3 Languages : HTML, CSS, Javascript'

// //simpan sebagai 'file.js' and eksekusi dengan 'node file.js'

// console.log("hallo rachel")
// //menampilkan '' ke dalam terminal

function urutan(angka){
    var output=''
    for(i=1;i<=angka;i++){
        if((i)%3==0&&(i)%5==0){
            output+='PurwaDhika '
        }else if((i)%3==0){
            output+='Purwa '
        }else if((i)%5==0){
            output+='Dhika '
        }else{
            output+=(i)+' '
        }
    }
    return output
}
console.log(urutan(5))
