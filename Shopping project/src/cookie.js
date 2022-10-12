import { testcart } from "./cart.js";

class CookieUtil {
  //ฟังก์ชันในการรับค่าจากparameter name ที่ส่งกลับมาให้สามารถระบุลงในobj ของcookie แต่ละตัว
  static get(name) {
    console.log(`all cookies: ${document.cookie}`);
    let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;
    console.log(`cookieName = ${cookieName}`);
    console.log(`cookieStart = ${cookieStart}`);

    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(";", cookieStart);
      console.log(`cookieEnd = ${cookieEnd}`);
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
      console.log(`cookieValue = ${cookieValue}`);
    }

    return cookieValue;
  }
  //ฟังก์ชันในการตั้งค่าของ cookie ที่ประกอบไปด้วย parameter name , value ,expires
  static set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toUTCString()}`;
      // cookieText += `; expires=${expires}`;
    }

    console.log(`cookieText = ${cookieText}`);
    document.cookie = cookieText;
  }

  static unset(name) {
    CookieUtil.set(name, "", new Date(0));
  }
}
//ฟังก์ชัน addcookie ที่ set กำหนดเวลาให้กับตัว cart ที่เก็บซึ่งถ้าเกินระยะเวลาจะไม่สามารถแสดงได้
const addToCookie = () => {
  CookieUtil.set(
    "cart",
    JSON.stringify(testcart.productcart),
    new Date("January 1, 2022")
  );
};

export { CookieUtil, addToCookie };
