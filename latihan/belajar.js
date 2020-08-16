// console.log('*\n**\n***')
// var output=''
// for(let i=0;i<3;i++){
//     for(let j=0;j<=i;j++){
//         output+='*'
//     }
//     output+='\n'
// }
// console.log(output)


// var g=[[1,[2,[3]]],[4],[6,7,[2,35]]]
// console.log(g[1][0]) //4
// console.log(g[0][1][1][0]) //3

var robin =()=>{
    return {
        brian :()=>{
            return ()=>{
                return [,,{
                    hasian:'marcel'
                }]
            }
        }
    }
}

console.log(robin().brian()()[2].hasian)//marcel