// if(0) { //yang false hanya jika isi 0 atau null/undefined
//     console.log('Masuk sini')
// } else {
//     console.log('Masuk sini')
// }


// for(var i=1;i<=10;i+=2) {
//     console.log(i)
// }

// let x='';
// for(i=0; i<5; i++) {
//     for(j=5; j>i; j--) {
//         x+='*'    
//     }
//     x+='\n'
// }
// console.log(x)
// sama dengan console.log('*****\n****\n***\n**\n*')

let y='';
for(i=0; i<5; i++) {
    for(j=5; j>=1; j--){
        y+='*'
    }
    y+='\n'        
}
console.log(y)