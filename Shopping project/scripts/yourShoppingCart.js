import { cart } from './cart.js';
import * as styles from './styles/styles.js';
const yourProductsInCart = cart.list();
console.log(yourProductsInCart);
yourProductsInCart.forEach((yourProduct) => {
  const ulProductsEle = document.getElementById('ulProducts');
  const liInCartEle = document.createElement('li');
  liInCartEle.className = styles.liInCartStyle;
  const divImgInCartEle = document.createElement('div');
  divImgInCartEle.className = styles.divImgInCartStyle;
  const productImgEle = document.createElement('img');
  productImgEle.setAttribute('src', '/images/' + yourProduct.img);
  productImgEle.className = styles.imgInCartStyle;
  divImgInCartEle.appendChild(productImgEle);

  const divProductInCartEle = document.createElement('div');
  divProductInCartEle.className = styles.divProductInCartStyle;
  const divProductDetailInCartEle = document.createElement('div');
  divProductDetailInCartEle.className = styles.divProductNamePriceInCartStyle;

  const productNameEle = document.createElement('p');
  productNameEle.textContent = yourProduct.productName;
  divProductDetailInCartEle.appendChild(productNameEle);

  const productPriceForItemEle = document.createElement('p');
  productPriceForItemEle.textContent = (
    yourProduct.productPrice * yourProduct.qty
  ).toLocaleString('en-US');
  productPriceForItemEle.classList = 'ml-4';
  divProductDetailInCartEle.appendChild(productPriceForItemEle);

  divProductInCartEle.appendChild(divProductDetailInCartEle);
  const productDescEle = document.createElement('p');
  productDescEle.textContent = yourProduct.productDesc;
  divProductInCartEle.appendChild(productDescEle);

  const productQtyEle = document.createElement('p');
  productQtyEle.textContent = 'Qty: ' + yourProduct.qty;
  divProductInCartEle.appendChild(productQtyEle);

  liInCartEle.appendChild(divImgInCartEle);
  liInCartEle.appendChild(divProductInCartEle);
  ulProductsEle.appendChild(liInCartEle);
});
const totalPriceEle = document.getElementById('totalPrice');
totalPriceEle.textContent = yourProductsInCart
  .reduce(
    (totalPrice, product) => totalPrice + product.productPrice * product.qty,
    0
  )
  .toLocaleString('en-US');
