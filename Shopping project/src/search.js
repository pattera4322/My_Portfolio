import { product } from "./product.js";

//เเก้ให้เก็บฟังก์ชันที่เกียวข้องกับ search ทั้งหมดเป็น object โดยใช้ชื่อว่า searchingfun
let searchingfun = {
  //ฟังก์ชันซ่อนเเละโชว์เเถบค้นหา
  showAndHide: () => {
    var x = document.getElementById("searchButton");
    var y = document.getElementById("searchText");
    if (x.style.display === "none" && y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
  },
  //ฟังก์ชันสำหรับค้นหาสินค้า
  searching: () => {
    const word = document.getElementById("searchText");
    const filters = word.value.toUpperCase();
    product.filter(function (A) {
      if (A.productName.toUpperCase().indexOf(filters) < 0) {
        document.getElementById(A.productId).style.display = "none";
      } else {
        document.getElementById(A.productId).style.display = "";
      }
    });
  },
};

//ฟังก์ชันที่ไว้สั่งส่วนที่ไว้ติดต่อกับ user คือไอคอนค้นหา และปุ่มค้นหาสินค้า
const searchProducts = () => {
  iconSearch.addEventListener("click", searchingfun.showAndHide);
  searchButton.addEventListener("click", searchingfun.searching);
};

export { searchProducts };
