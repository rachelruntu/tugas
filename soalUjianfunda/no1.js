//1
//harga awal 10000 
//tiap menit naik 20% - (10000*0.2)12000 - (12000*0.2)14400 - (14400*0.2)17280
//tiap kelipatan 4 naiknya 10% - (17280*0.1)19008 - (19008*0.2)22809.6 - (22810*0.2)27371.52 - (27472*0.2)32846 - (32846*0.1)36132
//menit ke 49 26697248
//harganya diatas 30 juta return 'barang sudah dibeli'
const lelang =(menit)=>{
    var awal=10000
    var hitunganmenit=1
    while(hitunganmenit<menit){
        if (menit==0){
            awal+=Math.ceil(awal*1)
        }
        else if(hitunganmenit%4==0){ //jika sudah 4 menit dan
            awal+=Math.ceil(awal*0.1)
        }else{
            awal+=Math.ceil(awal*0.2)
        }
        hitunganmenit++
    
    }
    return awal > 30000000?'barang sudah dibeli':awal
}
console.log(lelang(0))