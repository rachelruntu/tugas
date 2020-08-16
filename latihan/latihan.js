//Init value
var arrProduct = [
    { id: 1579581080923, category: 'Fast Food', name: 'Noodle', price: 3500, stock: 9},
    { id: 1579581080923, category: 'Electronic', name: 'Headphone', price: 4300000, stock: 8},
    { id: 1579581080923, category: 'Cloth', name: 'Hoodie', price: 300000, stock: 7},
    { id: 1579581080923, category: 'Fruit', name: 'Apple', price: 10000, stock: 8},
];
var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];
var cart=[]

let tampilkanawal=(arr)=>{
    var outputprod=arr.map((val,index)=>{
        return (
            `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><input type='button' value='buy' onclick='funBuy(${val.id})'/></td>
                <td><input type='button' value='delete' onclick='fundelete(${index})'/></td>
                <td><input type='button' value='edit' onclick='funedit(${index})'/></td>
            </tr>`
        )
    }).join('')
    var outputcategory=arrCategory.map((val,index)=>{
        return (
            `<option value='${val}'>${val}</option>`
        )
    }).join('')
    document.getElementById('categoryFilter').innerHTML=outputcategory
    document.getElementById('categoryInput').innerHTML=outputcategory
    document.getElementById('render').innerHTML=outputprod
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
        tampilkanawal()
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
        
let Showfilter=(filterarr)=>{
return filterarr.map((val,index)=>{
    return(
        `<tr>
        <td>${val.id}</td>
        <td>${val.category}</td>
        <td>${val.name}</td>
        <td>${val.price}</td>
        <td>${val.stock}</td>
        </tr>`
        )
    })
}

//===============================================================
let funFilterName=()=>{
    var nameinput=document.getElementById('keyword').value
    var newarr=arrProduct.filter((val)=>{
        return val.nama.toLowerCase().includes(nameinput.toLowerCase())
    })
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}

let funFilterPrice=()=>{
    var minprice=document.getElementById('min').value
    var maxprice=document.getElementById('max').value
    var newarr=arrProduct
    if (minprice!=''||maxprice!=''){
        newarr=arrProduct.filter((val)=>val.price>=minprice&&val.price<=maxprice)
    }document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}

let funFilterCategory=()=>{
    var category=document.getElementById('categoryFilter').value
    var newarr
    if(category!=='All'){
        newarr=arrProduct.filter((val)=>{
            return val.category==category||category!=='All'
        })
    }else{
        newarr=arrProduct
    }
    document.getElementById('render').innerHTML=Showfilter(newarr).join('')
}
//----------------------------------------------------
let Tampilkancart=()=>{
    if(cart.length){
        var output=cart.map((val,index)=>{
            return  `<tr>
                        <td>${val.id}</td>
                        <td>${val.category}</td>
                        <td>${val.name}</td>
                        <td>${val.price}</td>
                        <td><input type='button' value='delete' onclick=''/></td>
                    </tr>`
        }).join('')
    }return output
}
let funBuy=(id)=>{
    var indexpilihan=arrProduct.findIndex((val)=>val.id===id)
    cart.push(
        arrProduct[indexpilihan]
    )
    document.getElementById('cart').innerHTML=Tampilkancart()
}
let fundelete=(index)=>{
    indexdelete=index
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
let funedit=(index)=>{
    indexedit=index
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
let funcanceldelete=()=>{
    indexdelete=-1
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
let funcanceledit=()=>{
    indexedit=-1
    document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
}
tampilkanawal(arrProduct)