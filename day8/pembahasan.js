// function hexabin(input=0){
//     var hexnumb='0123456789ABCDEF'.split('')
//     var output=[]
//     var inputawal=input
//     var sisa
//     do{
//         sisa=inputawal%16
//         output.push(hexnumb[sisa])
//         inputawal/=16
//         inputawal=Math.floor(inputawal)

//     }while(inputawal>0)
//     return output.reverse().join('')
// }

// console.log(hexabin(7562)) //decimal to hex 1o8A


// function hexabin(input=0){
//     var hexnumb='0123456789ABCDEF'.split('')
//     var output=[]
//     var inputawal=input
//     var sisa

//     for(i=inputawal;i>0;i=Math.floor(i/16)){
//         sisa=i%16
//         output.push(hexnumb[sisa])
//     }
//     return output.reverse().join('')
// }

// console.log(hexabin(7562)) //decimal to hex 1o8A


// function hexabin(input=0){
//     var hexnumb='0123456789ABCDEF'.split('')
//     var output=[]
//     var inputawal=input
//     var sisa

//     for(i=inputawal;i>0;i=Math.floor(i/2)){
//         sisa=i%2
//         output.push(hexnumb[sisa])
//     }
//     return output.reverse().join('')
// }

// console.log(hexabin(7562)) //decimal to binar 1o8A
