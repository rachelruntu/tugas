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

        

//----------------------------------------------------

tampilkanawal(arrProduct)