import { products } from './product.js';
import * as styles from './styles/styles.js';
import { cart } from './cart.js';
import { userBg } from './userBg.js';
import { user } from './user.js';

//background setting functions
const pinkBg = document.querySelector('#pinkBg');
pinkBg.addEventListener('click', setUserBackground);
const blueBg = document.querySelector('#blueBg');
blueBg.addEventListener('click', setUserBackground);

function setUserBackground(event) {
  if (event.target.id === 'pinkBg') {
    userBg.set('pink');
    hiddenBgColor(pinkBg, blueBg);
  } else if (event.target.id === 'blueBg') {
    userBg.set('blue');
    hiddenBgColor(blueBg, pinkBg);
  }
  document.body.className = userBg.selectedBg;
}

function hiddenBgColor(inActiveColor, activeColor) {
  inActiveColor.className.baseVal = inActiveColor.className.baseVal + ' hidden';
  const indexHiddenText = activeColor.className.baseVal.indexOf(' hidden');
  if (indexHiddenText != -1)
    activeColor.className.baseVal = activeColor.className.baseVal.substring(
      0,
      indexHiddenText
    );
}

//searching product functions
function search() {
  products.forEach((product) => {
    const tempProduct = document.querySelector(`#${product.productId}`);
    tempProduct.className = 'product';
  });

  let keyword = document.getElementById('searchText').value;
  // console.log(`your keyword: ${keyword}`);

  let notMatchingProducts = products.filter(
    (product) =>
      !product.productName.toLowerCase().includes(keyword.toLowerCase())
  );

  notMatchingProducts.forEach((product) => {
    const tempProduct = document.querySelector(`#${product.productId}`);
    tempProduct.className = 'product' + ' hidden';
  });
}

//search panel function
function searchEnable() {
  const searchImgEle = document.querySelector('#search');
  const searchTextEle = document.querySelector('#searchText');
  const searchBtnEle = document.querySelector('#searchButton');

  const searchBtnStyles = searchBtnEle.getAttribute('class');
  const searchTextStyle = searchTextEle.getAttribute('class');

  let isSearch = false;
  searchBtnEle.setAttribute('class', searchBtnStyles + ' invisible');
  searchTextEle.setAttribute('class', searchTextStyle + 'invisible');
  searchImgEle.addEventListener('click', () => {
    searchTextEle.value = '';
    isSearch = !isSearch;
    const show = isSearch ? ' visible' : 'invisible';
    searchBtnEle.setAttribute('class', searchBtnStyles + show);
    searchTextEle.setAttribute('class', searchTextStyle + show);
    searchTextEle.focus();
  });

  searchBtnEle.addEventListener('click', search);
}

//show products function
function showProduct(product) {
  //Products div
  let { productId, productName, productDesc, productPrice, img, stock } =
    product;
  const productsEle = document.querySelector('#products');
  //product div
  const divProductEle = document.createElement('div');
  divProductEle.className = 'product' + ' hidden';
  divProductEle.id = productId;

  //image div
  const divImgProductEle = document.createElement('div');
  divImgProductEle.className = styles.divImgStyle;

  const imgProductEle = document.createElement('img');
  imgProductEle.setAttribute('src', `./images/${img}`);
  imgProductEle.className = styles.imgStyle;

  divImgProductEle.appendChild(imgProductEle);
  divProductEle.appendChild(divImgProductEle);

  //product detail div
  const divProductNamePriceEle = document.createElement('div');
  divProductNamePriceEle.className = styles.divProductDetailStyle;

  const pProductNameEle = document.createElement('p');
  pProductNameEle.className = styles.productNamePriceStyle;
  pProductNameEle.textContent = productName;
  divProductNamePriceEle.appendChild(pProductNameEle);

  const pProductPriceEle = document.createElement('p');
  pProductPriceEle.className = styles.productNamePriceStyle;
  pProductPriceEle.textContent = `${productPrice} Baht`;
  divProductNamePriceEle.appendChild(pProductPriceEle);

  const pProductDescEle = document.createElement('p');
  pProductDescEle.className = styles.productDescStockStyle;
  pProductDescEle.textContent = productDesc;

  const pProductStockEle = document.createElement('p');
  pProductStockEle.className = styles.productDescStockStyle;
  pProductStockEle.innerHTML = `<span>Stocks: </span>${stock}`;

  const addDivEle = document.createElement('div');
  addDivEle.className = styles.divAddStyle;
  const addAhrefEle = document.createElement('a');
  addAhrefEle.id = productId;
  addAhrefEle.href = '#';
  addAhrefEle.addEventListener('click', addToCart, false);

  addAhrefEle.className = styles.addAhrefStyle;
  addAhrefEle.textContent = 'Add';
  addDivEle.appendChild(addAhrefEle);

  divProductEle.appendChild(divProductNamePriceEle);
  divProductEle.appendChild(pProductDescEle);
  divProductEle.appendChild(pProductStockEle);
  divProductEle.appendChild(addDivEle);

  productsEle.appendChild(divProductEle);
}

//add product to cart function
function addToCart(event) {
  alert(`${event.target.id} added in your cart`);
  cart.add({ productId: event.target.id, qty: 1 });
  const qtys = document.querySelector('#cartQtys');
  qtys.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0);
}

//remove cart function
const removeCartEle = document.querySelector('#remove-cart');
removeCartEle.addEventListener('click', removeCart);

function removeCart(event) {
  cart.remove();
  const qtys = document.querySelector('#cartQtys');
  qtys.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0);
}

//loading user cart, user background, and list all products
window.addEventListener('load', (e) => {
  e.preventDefault();
  //loading username
  user.load();
  const userEle = document.querySelector('#username');
  userEle.textContent = user.username;
  //loading user background preference
  userBg.load();
  userBg.selectedBg === 'blue'
    ? hiddenBgColor(pinkBg, blueBg)
    : hiddenBgColor(blueBg, pinkBg);

  document.body.className = userBg.selectedBg;
  //loading user cart
  cart.load();
  const qtys = document.querySelector('#cartQtys');
  qtys.textContent = cart.items.reduce((tot, item) => tot + item.qty, 0);

  products.forEach((product) => {
    showProduct(product);
  });

  //show list of products
  searchEnable();
  search();
});

//6. save user' cart to local storage
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  cart.save();
  userBg.save();
  user.set('umaporn');
  user.save();
});
