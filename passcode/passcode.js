const checkpass2=(input)=>{
    var input1=input.replace(' ','')
    if(input1.length<6){
        return 'input harus 6 karakter'
    }
    var angka=false
    var huruf=false
    for (var i=0;i<input1.length;i++){
        if(isNaN(input1[i])){
            huruf=true
        }else{
            angka=true
        }
    }
    return angka&&huruf?'berhasil':angka?'kurang huruf':'kurang angka'
}

console.log(checkpass2('abcdef'))
console.log(checkpass2('Abc123'))
console.log(checkpass2('123456'))
console.log(checkpass2('ab2 45'))
