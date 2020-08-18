class Todo{
    constructor(a,b,c){
        this.kegiatan=a
        this.foto=b
        this.hari=c
    }
}
var harihari=['pilihhari','Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
var indexedit=-1
var indexdelete=-1
var datakegiatan=[
    new Todo('lari','https://cdn1-production-images-kly.akamaized.net/P1vNjKg4umX_VW6vTP_BokebaCg=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2251857/original/045824300_1529139216-iStock-860246654.jpg',harihari[1]),
    new Todo('jalan','https://cdn1-production-images-kly.akamaized.net/P1vNjKg4umX_VW6vTP_BokebaCg=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2251857/original/045824300_1529139216-iStock-860246654.jpg',harihari[2]),
]

const tampilanAwal=()=>{
    var tampilan=datakegiatan.map((val,index)=>{
        if(index==indexdelete){
            return  `<tr>
                        <td>${index+1}</td>
                        <td>${val.kegiatan}</td>
                        <td> <img src="${val.foto}" alt="${val.kegiatan}" height='150' ></td>
                        <td>${val.hari}</td>
                        <td><input type='button' value='Yes'/>&nbsp;<input type='button' value='Cancel' onclick='onCanceldeleteclick()' /></td>
                    </tr>` 
        }if(index==indexedit){
            return  `<tr>
            <td>${index+1}</td>
            <td>${val.kegiatan}</td>
            <td> <img src="${val.foto}" alt="${val.kegiatan}" height='150' ></td>
            <td>${val.hari}</td>
            <td><input type='button' value='save'/>&nbsp;<input type='button' value='cancel' onclick='onCanceleditclick(${index})'/></td>
            </tr>` 
        }return `<tr>
        <td>${index+1}</td>
        <td>${val.kegiatan}</td>
        <td> <img src="${val.foto}" alt="${val.kegiatan}" height='150' ></td>
        <td>${val.hari}</td>
        <td><input type='button' onclick='onEditclick(${index})' value='edit'/>&nbsp;<input type='button' onclick='onDeleteclick(${index})' value='delete'/></td>
        </tr>`
    }).join('')
    document.getElementById('isi').innerHTML=tampilan
}
tampilanAwal()

const tampilanhari=()=>{
    const hari=harihari.map((val,index)=>{
        if(val=='pilihhari'){
            return `<option value=${index} selected hidden>${val}</option>`
        }
        return `<option value=${index}>${val}</option>`
    }).join('')
    document.getElementById('Hari').innerHTML=hari
}
tampilanhari()

const onAddclick=()=>{
    var kegiatan=document.getElementById('kegiatan').value
    var hari=document.getElementById('Hari').value
    var gambar=document.getElementById('gambar').value

    datakegiatan.push(new Todo(kegiatan,gambar,harihari[hari]))
    tampilanAwal()
}

const onEditclick=(indexkiriman)=>{
    indexedit=indexkiriman
    tampilanAwal()
}
const onDeleteclick=(indexkiriman)=>{
    indexdelete=indexkiriman
    tampilanAwal()
}
const onCanceldeleteclick=()=>{
    indexdelete=-1
    tampilanAwal()
}
const onCanceleditclick=()=>{
    indexedit=-1
    tampilanAwal()
}



