let item = { id: 101, img: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg", name: "Dosa", price: 40, qty: 1 };
let htmlCode = `<tr>
                        <td>${item.id}</td>
                            <td>
                                <img src="${item.img}" alt="" width="30px" height="30px">
                            </td>
                            <td>${item.name}</td>
                            <td>${item.price}&#8377;</td>
                            <td>
                                <i class="bi bi-dash-circle-fill" onclick="decQty();"></i>
                                <span id="display-qty">${item.qty}</span>
                                <i class="bi bi-plus-circle-fill" onclick="incQty();"></i>
                            </td>
                            <td>40.00 &#8377;</td>
                        </tr>`;
let itemDisplay = document.getElementById('item-display');
itemDisplay.innerHTML = htmlCode;
let qty = 1;
let displayQtyE1 = document.getElementById('display-qty');
displayQtyE1.textContent = qty;
function incQty() {
    ++qty;
    displayQtyE1.textContent = qty;
    console.log('incr')
}
function decQty() {
    if (qty > 1) {
        --qty;
        displayQtyE1.textContent = qty;
    }
    else displayQtyE1.textContent = 1;
    console.log('dec')
}    