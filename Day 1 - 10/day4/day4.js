// //Looping

// //while, do/while, for

// var angka = 1;

// while(angka <=10){
// 	console.log(angka);
// 	angka++;
// }
// //12345678910

// do  {
//     // code block to be executed - yang mau di looping berulang-ulang
//     } 
//     while (condition);

// var angka = 1;

// do  {
//         console.log(angka);
//         angka++;
//     } while(angka <=10) ;
// //12345678910

// //for have 3 statement or condition

// var x;
// for(x=1; x<=10; x++){
//     console.log(x);
// }
// //12345678910

// var x
// for (x=1;x<=10;x++) {
//     console.log('Nomor urut'+x)
// }

// var y = 'Nomor urut'
// for (let x=1;x<=10;x++){
//     console.log(y+x)
// }
//// solve it

// var y='nomor urut'
// for(let x=0;x<=20;x++){
//     for(let i=0;i%2;i++){
//     }
//     console.log(x)
// } //Gagal

// for(let x=0;x<=20;x+=2){
//     console.log(y+x)
// } // nomor urut genap

// for(let x=1;x<=20;x+=2){
//     console.log(y+x)
// } // nomor urut ganjil

// let x=''
// for (let y=0;y<5;y++){
//     x+='* '
// }
// console.log(x)
// //* * * * *


// let x=''
// for (let y=0;y<5;y++){
    //     x+='*\n'
    // }
    // console.log(x)
    // //*\n*\n*\n*\n*
    
    
// let x=''
// for (let y=0;y<5;y++){
//     for (let i=0;i<5;i++){
    //         x+='* '
    //     }
    //     x+='\n'
    // }
    // console.log(x)
    
                    
// let x=''
// for (let y=0;y<5;y++){
//     x+='* '
//     console.log(x)
// } //*\n**\n***\n****\n*****\n

// let x=''
// for (let y=0;y<5;y++){
//     for (let i=5;i>y;i--){
//         x+='* '
//     }
//     x+='\n'
// }
// console.log(x)
// //('*****\n****\n***\n**\n*')

// //SOLVEIT 19
// var a=''
// for(let i=0; i<5; i++){
//     //cetak spasi
//     for(let j=0; j<(5-i); j++){
//         a+=' '
//     }
//     //cetak '*'
//     for (let k=0; k<((2*i)+1); k++){
//         a+='*'
//     } 
//     a+='\n'
// }

// //SOLVEIT 20
// var b=''
// for(let i=4; i>=0; i--){
//     //cetak spasi
//     for (let j=4; j>=0; j--){
//         b+=' '
//         if (i===j){
//             break
//         }
//     }
//     //cetak '*'
//     for(let k=0; k<((2*i)+1); k++){
//         b+='*'
//     }
//     b+='\n'
// }
// console.log(b)


//SOLVEIT21
var a=''
for(let i=0; i<5; i++){
    //cetak spasi
    for(let j=0; j<(5-i); j++){
        a+=' '
    }
    //cetak '*'
    for (let k=0; k<((2*i)+1); k++){
        a+='*'
    } 
    a+='\n'
}
var b=''
for(let i=4; i>=0; i--){
    //cetak spasi
    for (let j=4; j>=0; j--){
        b+=' '
        if (i===j){
            break
        }
    }
    //cetak '*'
    for(let k=0; k<((2*i)+1); k++){
        b+='*'
    }
    b+='\n'
}
console.log(a+b)
