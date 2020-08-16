// tugas 1

// function besarinhuruf(a){
//     console.log(a.toUpperCase());
// }
// besarinhuruf('halo dunia')

// function kecilinhuruf(b){
//     console.log(b.toLowerCase());
// }
// kecilinhuruf('HALO DUNIA')

// let hurufbesar=(kata)=>{
//     var hurufbesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     var hurufkecil='abcdefghijklmnopqrstuvwxyz'
//     var output=''
//     for(let i=0; i<kata.length; i++){
//         var hitung=0
//         for(let j=0; j<hurufkecil.length;j++){
//             if(kata[i]==hurufkecil[j]){
//                 output+=hurufbesar[j]
//                 break
//             }else if(kata[i]==' '){
//                 output+=' '
//                 break
//             }else if(kata[i]>=0){
//                 return 'nggak boleh ada angka'
//             }
//         }
//         if(!hitung){
//             output+=kata[i]
//         }
//     }
//     return output
// }

// console.log(hurufbesar('ZZZ BBB'))
// console.log(hurufbesar('AA1 GGG'))
// console.log(hurufbesar('FFF OOO'))

var x = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z']
// var y = [h,a,l,o, ,d,u,n,i,a]
function tugas2(x){
    for(x=0; x<tugas2.length; x++)
        if(x=26){
            x-=25
        } else if (x=1){
            x+=25
        }
}
console.log(tugas2['halo dunia'])

// function Pangkat(x,y){
//     if (y == 1){
//         return x;
//     }
//     else{
//         return x=x*Pangkat(x,y-1)
//     }
// }
// console.log(Pangkat(7,2))

