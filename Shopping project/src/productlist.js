import { product } from "./product.js";

//ไว้สำหรับโชว์สินค้าทั้งหมด
function productList() {
  const divProductsEle = document.querySelector("#products");
  console.log(divProductsEle);
  for (let num in product) {
    const divProduct = document.createElement("div");
    divProduct.setAttribute("id", product[num].productId);
    const productImg = document.createElement("img");
    productImg.src = product[num].img;
    divProduct.appendChild(productImg);
    const pProductName = document.createElement("p");
    pProductName.setAttribute("id", "p" + product[num].productId + "name");
    pProductName.textContent = product[num].productName;
    divProduct.appendChild(pProductName);
    const pProductDesc = document.createElement("p");
    pProductDesc.textContent = "Description : " + product[num].productDesc;
    divProduct.appendChild(pProductDesc);
    const pProductprice = document.createElement("p");
    pProductprice.textContent = "Price : " + product[num].price + " baht";
    divProduct.appendChild(pProductprice);
    const pProducttotal = document.createElement("p");
    pProducttotal.setAttribute("id", "p" + product[num].productId);
    pProducttotal.textContent = "Total : " + product[num].total + " piece";
    divProduct.appendChild(pProducttotal);

    //สร้างปุ่มเพิ่มสินค้า
    const pButton = document.createElement("BUTTON");
    pButton.setAttribute("id", "addButton");
    pButton.className = "addButton";
    divProduct.appendChild(pButton);
    pButton.textContent = "ADD";

    divProductsEle.appendChild(divProduct);
  }
}

export { productList };
