let item_1={id:1,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s",name:"Masala Dosa",price:99,qty:1};
let item_2={id:2,img:"https://www.sharmispassions.com/wp-content/uploads/2020/12/idli12-460x500.jpg",name:"Idli",price:40,qty:2};
let item_3={id:3,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg",name:"Pongal",price:60,qty:1};
let item_4={id:4,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo1SjO6Pc4r--XqFJ8KzVPYnjInEeQhLhkA&s",name:"Puri",price:50,qty:1};
let items=[item_1,item_2,item_3,item_4]
function displayItems(Products){
    if(Products.length!=0){
        let eachProduct=``;
        for(let product of Products)
        {
            eachProduct+=`<div class="col-md-3">
                <div class="card">
                    <div class="card-header">
                        <img src="${product.img}" alt=""
                        class="img-fluid"></img>
                    </div>
                    <div class="card-body text-center">
                        <h1>${product.name}</h1>
                        <h2>${product.price}.00 &#8377;</h2>
                        <h5>
                            <i class="bi bi-dash-circle-fill" onclick="decQty(${product.id})"></i>
                            <span>${product.qty}</span>
                            <i class="bi bi-plus-circle-fill"
                                onclick="incQty(${product.id})"></i>
                        </h5>
                    </div>
                </div>
            </div>`
        }
        document.getElementById('display-items').innerHTML=eachProduct;
    }
}
displayItems(items);
//Inc Function
function incQty(id)
{
    let filteredArr=items.map(function(item){
        if(item.id==id){
            let obj={...item,qty:++item.qty};
            return obj;
        }
        else{
            return item;
        }
    });
    displayItems(filteredArr);
}
// Decrement Function
function decQty(id) {
    let filteredArr = items.map(function (item) {
        if (item.id == id && item.qty > 1) {
            let obj = { ...item, qty: --item.qty };
            return obj;
        } else {
            return item;
        }
    });
    displayItems(filteredArr);
}