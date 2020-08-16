// //Input Manusia

var arrData=[
    {nama:'rahel',usia:'18',gender:'wanita',pekerjaan:'aaa'},
    {nama:'blabla',usia:'17',gender:'wanita',pekerjaan:'apa'},
    {nama:'xxxx',usia:'11',gender:'pria',pekerjaan:'oa'},
    {nama:'apaya',usia:'100',gender:'pria',pekerjaan:'iiy'},
]
var data=[]

const tampilanAwal=()=>{
    var output=arrData.map((val,index)=>{
        return (
            `<tr>
                <td>${index+1}</td>
                <td>${val.nama}</td>
                <td>${val.usia}</td>
                <td>${val.gender}</td>
                <td>${val.pekerjaan}</td>
            </tr>`
        )
    }).join('')
    document.getElementById('render').innerHTML=output
}

const funSubmit=()=>{
    let _nama=document.getElementById('namaInput').value
    let _usia=document.getElementById('usiaInput').value
    let _gender=document.querySelector('input[name=pertama]:checked').value //hanya bisa 
    let _pekerjaan=document.getElementById('pekerjaanInput').value
    
    arrData.push(
        { 
            nama: _nama,
            usia:_usia , 
            gender:_gender, 
            pekerjaan:_pekerjaan, 
        },
        )
        tampilanAwal()
    }

    const bubblesort=(props)=>{
        for(let i=arrData.length-1;i > 0; i--){
            for(let j=0;j<i;j++){
                if(arrData[j][props]>arrData[j+1][props]){// klo pengen ubah besar kecil pake < ,kalo kecil besar >
                    const temp=arrData[j]
                    arrData [j]=arrData[j+1] 
                    arrData [j+1]=temp
                }
            }
        }
        tampilanAwal()
    }

const funClicknama=()=>{
    bubblesort('nama')
}
const funClickusia=()=>{
    bubblesort('usia')
}
const funClickgender=()=>{
    bubblesort('gender')
}
const funClickpekerjaan=()=>{
    bubblesort('pekerjaan')
}
tampilanAwal()
