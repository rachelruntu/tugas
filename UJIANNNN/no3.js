// Init value
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9, stockbeli:1},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8, stockbeli:1},
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7, stockbeli:1 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 , stockbeli:1 }
  ];
  
// init value
var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var cart=[]
var indexdelete=-1

let tampilkanawal=()=>{
    var outputprod=arrProduct.map((val,index)=>{
        return (
            ` <tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><input type='button' value='buy' id='tdkbsclickbuy' onclick='funBuy(${val.id})'/></td>
                <td><input type='button' value='delete' onclick='fundelete(${index})'/></td>
                <td><input type='button' value='edit' onclick='funedit(${index})'/></td>
            </tr>`
        )
    }).join('')
    var outputcategory=arrCategory.map((val)=>{
        return (
            `<option value='${val}'>${val}</option>`
        )
    }).join('')
    document.getElementById('categoryFilter').innerHTML=outputcategory
    document.getElementById('categoryInput').innerHTML=outputcategory
    document.getElementById('render').innerHTML=outputprod
}

const fundelete=(index)=>{
    // console.log(index)
    indexdelete=index
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
const funedit=(index)=>{
    indexedit=index
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}

let funInputData=()=>{
    var _name = document.getElementById("nameInput").value;
    var _price = document.getElementById("priceInput").value;
    var _category = document.getElementById("categoryInput").value;
    var _stock = document.getElementById("stockInput").value;
    // create date instance
    var time = new Date().getTime()
    arrProduct.push(
        { 
            id: time,
            category:_category , 
            name: _name, 
            price: _price, 
            stock : _stock
        },
    )
    document.getElementById("nameInput").value='';
    document.getElementById("priceInput").value='';
    document.getElementById("categoryInput").value='';
    document.getElementById("stockInput").value='';
    tampilkanawal(arrProduct)
}

let filter=()=>{
    var nameinput=document.getElementById('keyword').value //''
    var minprice=document.getElementById('min').value // ''
    // console.log(typeof(minprice))
    var maxprice=document.getElementById('max').value // ''
    var category=document.getElementById('categoryFilter').value
    var newarr=arrProduct.filter((val)=>{
        var inputname=val.name.toLowerCase().includes(nameinput.toLowerCase())//boolean
        // if(!nameinput){
        //     inputname=true //kalo inputnya kosong
        // }
        var inputprice=val.price>=minprice&&val.price<=maxprice
        if(!minprice||!maxprice){
            inputprice=true // klo inputannya kosong
        }
        var inputcategory=val.category==category&&category!=='All'
        if(category=='All'){
            inputcategory=true //klo inputannta kosong
        }
        return inputname && inputprice && inputcategory //true 
    })
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}
let funFilterName=()=>{
    var nameinput=document.getElementById('keyword').value
    var newarr= arrProduct.filter((val)=>{
        return val.name.toLowerCase().includes(nameinput.toLowerCase())
    })
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')

}
let funFilterPrice=()=>{
    var minprice=document.getElementById('min').value
    var maxprice=document.getElementById('max').value
    var newarr=arrProduct
    if(minprice!='' && maxprice!=''){
        newarr=arrProduct.filter((val)=>val.price>=minprice&&val.price<=maxprice)
    }
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}
let funFilterCategory=()=>{
    var category=document.getElementById('categoryFilter').value
    // document.getElementById('categoryFilter').value
    console.log(category)
    var newarr
    if(category!=='All'){
        newarr= arrProduct.filter((val)=>{
            return val.category==category&&category!=='All'
        })
    }else{
        newarr= arrProduct
    }
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')

}
var indexedit=-1

const funccanceldelete=()=>{
    indexdelete=-1
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
const funccanceledit=()=>{
    indexedit=-1
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')

}
const funsaveedit=()=>{
    var nameinputedit=document.getElementById('editnama'+indexedit).value //''
    var priceedit=document.getElementById('editprice'+indexedit).value // ''
    // var deletecart=document.getElementById('deletecart'+indexedit).value
    var indexcart=cart.findIndex((val)=>val.id==id)
    
    var stokedit=document.getElementById('editstock'+indexedit).value // ''
    var categoryedit=document.getElementById('editcategory'+indexedit).value
    console.log(nameinputedit,priceedit,stokedit,categoryedit)
    arrProduct.splice(indexedit,1,{
        ...arrProduct[indexedit],
        category:categoryedit,
        name:nameinputedit,
        stock:stokedit,
        price:priceedit
    })
    arrProduct[indexedit].stokedit+cart[indexcart].stockbeli
        // arrProduct.splice(indexedit,1,{
        //     ...arrProduct[indexedit],stockindexcart
    // })
    // stock+arrProduct[stokedit]
    indexedit=-1
    // arrProduct[indexedit]
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
const savedelete=()=>{
    arrProduct.splice(indexdelete,1)
    indexdelete=-1
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
function Showfilter(filterarr){
    return filterarr.map((val,index)=>{
        if(index==indexdelete){
            return(
                `<tr>
                    <td>${val.id}</td>
                    <td>${val.category}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                    <td><input type='button' onclick='savedelete()' value='yes'/></td>
                    <td><button onclick='funccanceldelete()'>cancel</button></td>
                </tr>`
            )
        }else if(index==indexedit){
            var outputcategory=arrCategory.map((val1)=>{
                if(val1===val.category){
                    return `<option value='${val1}' selected>${val1}</option>`
                }
                return (
                    `<option value='${val1}'>${val1}</option>`
                )
            }).join('')
            return(
                `<tr>
                    <td>${val.id}</td>
                    <td><select id='editcategory${index}'>${outputcategory}</select></td>
                    <td> <input type="text" value='${val.name}' id="editnama${index}"></td>
                    <td> <input type="number" value='${val.price}' id="editprice${index}"></td>
                    <td> <input type="number" value='${val.stock}' id="editstock${index}"></td>
                    <td><input type='button' onclick='funsaveedit()' value='save'/></td>
                    <td><button onclick='funccanceledit()'>cancel</button></td>
                </tr>`
            )
        }
        return(
            `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><input type='button' value='buy' id='tdkbsclickbuy' onclick='funBuy(${val.id})'/></td>
                <td><input type='button' value='delete' onclick='fundelete(${index})'/></td>
                <td><input type='button' value='edit' onclick='funedit(${index})'/></td>
            </tr>`
        )
     })
 }

function Tampilkancart(){
    if(cart.length){
        var output=cart.map((val,index)=>{
        return   `<tr>
                    <td>${val.id}</td>
                    <td>${val.category}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stockbeli}</td>
                    <td><input type='button' value='Delete' onclick='deletecart(${val.id})'/></td>
                    <td><input type='button' value='Edit' onclick='editcart(${val.id})'/></td>

                </tr>`
        }).join('')
        return output
    }else{
        return ''
    }
}


function deletecart(id){
    var indexprod=arrProduct.findIndex((val)=>val.id===id)
    var indexcart=cart.findIndex((val)=>val.id===id)
    var stock=cart[indexcart].stockbeli

    console.log(stock)
    cart.splice(indexcart,1)
    arrProduct[indexprod].stock+=stock
    if(arrProduct[indexprod].stock<=stock){
        arrProduct[indexprod].stock=stock
    }
    
    document.getElementById('cart').innerHTML=Tampilkancart()
    tampilkanawal(arrProduct)
}

let funBuy=(id)=>{
    var indexplihan=arrProduct.findIndex((val)=>val.id==id)
    var indexcart=cart.findIndex((val)=>val.id==id)
    console.log(indexcart)
    if(indexcart==-1){
        cart.push({...arrProduct[indexplihan],stockbeli:1})
    }else if(arrProduct[indexplihan].stock<=0&&cart[indexcart].stockbeli>arrProduct[indexplihan].stock){
        document.getElementById('tdkbsclickbuy').disabled=true
        alert('stok habis')
        return
        // arrProduct[indexplihan].stock=disabled
        // console.log('ok')
    }else{
        cart[indexcart].stockbeli++
    }
    arrProduct[indexplihan].stock-=1
    tampilkanawal(arrProduct)
    document.getElementById('cart').innerHTML=Tampilkancart()
}
let payment=()=>{
     var listpayment=cart.map((val)=>{
         return `<p>${val.id} | ${val.category} | ${val.name} |${val.price}</p>`
     })
     var subtotal=0
     cart.forEach((val)=>{
         subtotal+=val.price*val.stockbeli
     })
     var ppn=subtotal*0.01
     var total=subtotal+ppn
     document.getElementById('payment').innerHTML = listpayment.join('')+`<h3> subtotal ${subtotal}</h3>`+`<h3> ppn ${ppn}</h3>`+`<h3>Total ${total}</h3>`
     document.getElementById('input').innerHTML = `<input type="number" id="membayar">`
    // </input><button onclick='bayar()'>pay</button>
    }     
    
tampilkanawal(arrProduct)

const totalbayar=()=>{
    var output=0
    cart.forEach((val)=>{
        output+=val.price*val.stockbeli
    })
    var ppn=output*0.01
    var outputbayar=output+ppn
    return outputbayar
}

const bayar=()=>{
    var input=document.getElementById('membayar').value
    if(input<totalbayar()){
        alert('Uangnya kurang'+(totalbayar()-input))
        var jadigak=confirm('mau ulang pembayaran?')
        if(!jadigak){
            alert('ok')
        }
    }else if(input==totalbayar()){
        alert('terimakasih')
    }else{
        alert('terimakasih, kembaliaannya= '+(input-totalbayar()))
    }
}
