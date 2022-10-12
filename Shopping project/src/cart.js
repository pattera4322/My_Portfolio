import { product } from "./product.js";
import { CookieUtil, addToCookie } from "./cookie.js";

//เเก้ให้เก็บฟังก์ชันที่เกียวข้องกับ cart ทั้งหมดเป็น object โดยใช้ชื่อว่า testcart
let testcart = {
  productcart: JSON.parse(CookieUtil.get("cart")) || [],
  //ฟังก์ชันไว้เเสดงหน้าตะกร้าสินค้า
  displayCarts: () => {
    if (testcart.productcart.length === 0) {
      alert("This cart empty!!");
    } else {
      testcart.createModal();
      var modal = document.getElementById("myModal");

      document.getElementById("totalPrice").innerHTML =
        "Total Price : " + testcart.totalPrice();

      for (let p1 in testcart.productcart) {
        const idInCart = document.getElementById("idforcart" + p1);
        idInCart.innerHTML =
          "Product Name: " +
          testcart.productcart[p1].name +
          " Amount : " +
          testcart.productcart[p1].amount;

        const removeButton = document.createElement("BUTTON");
        removeButton.setAttribute("data-name", testcart.productcart[p1].name);
        removeButton.id = "remove" + p1;
        idInCart.appendChild(removeButton);
        removeButton.textContent = "remove";

        const idRemove = document.getElementById("remove" + p1);
        idRemove.addEventListener("click", () => {
          //เอาไว้อัพเดตค่า total เมื่อทำการ remove product ใน total
          for (let idp in product) {
            if (testcart.productcart[p1].id === product[idp].productId) {
              document.getElementById("p" + product[idp].productId).innerHTML =
                "Total : " + ++product[idp].total + " piece";
            }
          }
          if (testcart.productcart[p1].amount > 1) {
            idInCart.innerHTML =
              "Product Name: " +
              testcart.productcart[p1].name +
              " Amount : " +
              --testcart.productcart[p1].amount;
            addToCookie();
            idInCart.appendChild(removeButton);
          } else {
            alert(
              "remove productId " +
                testcart.productcart[p1].id +
                ", productname " +
                testcart.productcart[p1].name
            );
            testcart.removeModal();
            testcart.productcart.splice(p1, 1);
            addToCookie();
            modal.style.display = "none";
          }
          document.getElementById("totalPrice").innerHTML =
            "Total Price : " + testcart.totalPrice();
          document.getElementById("cart").innerHTML =
            "cart : " + testcart.amountInCart();
        });
      }
    }
  },
  //ลบตะกร้า
  removeModal: () => {
    for (let pt in testcart.productcart) {
      const Test10 = document.getElementById("idforcart" + pt);
      Test10.remove();
    }
  },

  //สำหรับการสร้างสินค้าที่มีในตะกร้า
  createModal: () => {
    const modal = document.querySelector(".modal");
    const modalCon = modal.querySelector(".modal-content");
    const cartList = modalCon.querySelector(".cart-list");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      testcart.removeModal();
      modal.style.display = "none";
    };
    modal.style.display = "block";
    for (let p in testcart.productcart) {
      const pModal = document.createElement("p");
      pModal.setAttribute("id", "idforcart" + p);
      cartList.appendChild(pModal);
    }
  },

  //คิดผลรวมราคาสินต้าทั้งหมดถายในตะกร้า
  totalPrice: () => {
    let initialValue = 0;
    let total = testcart.productcart.reduce(
      (previous, current) => previous + current.price * current.amount,
      initialValue
    );
    return total;
  },

  //อัพเดตจำนวนสินค้าที่อยู่ภายในตะกร้าสินค้า
  updateAmountInCart: () => {
    let pCart = document.getElementById("cart");
    pCart.innerHTML = "cart : " + testcart.amountInCart();
  },

  //ฟังก์ชันไว้หาจำนวนสินค้าทั้งหมดภายในตะกร้า
  amountInCart: () => {
    let initialValue = 0;
    let sum = testcart.productcart.reduce(
      (previous, current) => previous + current.amount,
      initialValue
    );
    return sum;
  },

  //ไว้อัพเดตจำนวนสินต้าในสต้อคเมื่อมีการเพิ่มเข้าตะกร้าสินค้า
  updateTotalWhenAdd: (n) => {
    if (product[n].total > 0) {
      document.getElementById("p" + product[n].productId).innerHTML =
        "Total : " + --product[n].total + " piece";
    }
  },

  //ไว้ลบสินค้าในตะกร้าทั้งหมด
  removeAll: () => {
    let pCart = document.getElementById("cart");
    alert("Remove All");
    testcart.resetStock();
    testcart.productcart = [];
    pCart.innerHTML = "cart : " + 0;
    CookieUtil.unset("cart");
  },
  //สำหรับให้สินค้าใน stock ที่เราเก็บไว้เหมือนเดิม เมื่อมีการลบสินค้าทั้งหมดในตะกร้า
  resetStock: () => {
    for (let total in product) {
      const haveInCart = testcart.productcart.find(
        (c) => c.id === product[total].productId
      );
      if (haveInCart) {
        product[total].total = haveInCart.amount + product[total].total;
        document.getElementById("p" + product[total].productId).innerHTML =
          "Total : " + product[total].total + " piece";
      }
    }
  },
};
//ฟังก์ชันที่ไว้สั่งส่วนที่ไว้ติดต่อกับ user คือไอคอนตะกร้า,ถังขยะ และจำนวนสินค้าในตะกร้า
const cart = () => {
  iconCart.addEventListener("click", testcart.displayCarts);
  const pCart = document.getElementById("cart");
  iconRemove.addEventListener("click", testcart.removeAll);
  return (pCart.textContent = "cart : " + testcart.amountInCart());
};
//ฟังก์ชันไว้สำหรับเพิ่มสินค้าลงตะกร้า
function addProductToCart() {
  for (let n in product) {
    const bt = document.getElementById(product[n].productId);
    const addBt = bt.querySelector("Button");
    addBt.addEventListener(
      "click",
      () => {
        if (product[n].total !== 0) {
          const alreadyInCart = testcart.productcart.find(
            (c) => c.id === product[n].productId
          );
          if (alreadyInCart) {
            alreadyInCart.amount++;
          } else {
            testcart.productcart.push({
              id: product[n].productId,
              name: product[n].productName,
              price: product[n].price,
              amount: 1,
            });
          }
          testcart.updateAmountInCart();
          testcart.updateTotalWhenAdd(n);
          addToCookie();
        } else {
          alert("Can not add this product!!");
        }
      },
      true
    );
  }
}

export { testcart, cart, addProductToCart };
