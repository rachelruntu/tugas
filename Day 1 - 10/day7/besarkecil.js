let hurufbesar=(kata)=>{
    var hurufbesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var hurufkecil='abcdefghijklmnopqrstuvwxyz'.split('')
    var output=''
    for(let i=0;i<kata.length;i++){
        for(let j=0;j<hurufkecil.length;j++){
            if(kata[i]==hurufkecil[j]){
                output+=hurufbesar[j]
                break
            }else if(kata[i]==' '){
                output+=' '
                break
            }else if(kata[i]>=0){
                return 'nggak boleh ada angka'
            }
        }
    }
    return output
}
let hurufkecil=(kata)=>{
    var hurufbesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufkecil='abcdefghijklmnopqrstuvwxyz'
    var output=''
    for(let i=0;i<kata.length;i++){
        var hitung=0
        for(let j=0;j<hurufbesar.length;j++){
            if(kata[i]==hurufbesar[j]){
                output+=hurufkecil[j]
                hitung++
                break
            }else if(kata[i]==' '){
                output+=' '
                hitung++
                break
            }else if(kata[i]>=0){
                return 'nggak boleh ada angka'
            }
        }
        if(!hitung){
            output+=kata[i]
        }
    }
    return output
}

console.log(hurufkecil('123 BBB'))
console.log(hurufkecil('AAAAAAA'))
console.log(hurufbesar('aaa bbB'))
console.log(hurufbesar('123 BBB'))