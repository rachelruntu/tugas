// var nama, harga, kondisi, kategori
// const nambahproduk=()=>{
//     nama = document.getElementById('name').value
//     harga = document.getElementById('price').value


// }

// isiTabel+= `<tr><td>${nama}</td><td>${harga}</td><td>${kondisi}</td><td>${kategori}</td><tr>`

// document.getElementById('produk').innerHTML = isiTabel

let arrProduct=[],arrAnimal=[]

const submitProduct=(e)=>{
    e.preventDefault()
    var nama=document.getElementById('name').value
    var price=document.getElementById('price').value
    var kondisi=document.querySelector('input[name=condition]:checked').value
    var kategori=document.getElementById('category').value
    var obj={nama,price,kondisi,kategori}
    arrProduct.push(obj)
    tampilkanProduct()
}
const submitAnimal=(e)=>{
    e.preventDefault()
    var nama=document.getElementById('nameH').value
    var price=document.getElementById('priceH').value
    var sex=document.querySelector('input[name=sex]:checked').value
    var stat=document.querySelector('input[name=stat]:checked').value
    var obj={nama,price,sex,stat}
    arrAnimal.push(obj)
    tampilkanAnimal()
}
const tampilkanProduct=()=>{
    var output=arrProduct.map((val,index)=>{
        return (
            `<tr><td>${val.nama}</td><td>${val.price}</td><td>${val.kondisi}</td><td>${val.kategori}</td></tr>`
        )
    })
    document.getElementById('product').innerHTML=output.join('')
}
const tampilkanAnimal=()=>{
    var output=arrAnimal.map((val,index)=>{
        return (
            `<tr><td>${val.nama}</td><td>${val.price}</td><td>${val.sex}</td><td>${val.stat}</td></tr>`
        )
    })
    document.getElementById('animal').innerHTML=output.join('')
}