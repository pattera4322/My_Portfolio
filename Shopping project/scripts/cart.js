import { products } from './product.js';
export let cart = {
  items: [],
  add: function (product) {
    let foundIndex = -1;

    foundIndex = cart.items.findIndex(
      (item) => item.productId === product.productId
    );

    if (foundIndex === -1) {
      cart.items.push({ productId: product.productId, qty: 1 });
    } else {
      cart.items[foundIndex].qty += 1;
    }
  },

  save: function () {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  },

  load: function () {
    cart.items = localStorage.getItem('cart');

    if (cart.items == undefined || cart.items.length === 0) {
      cart.items = [];
    } else {
      cart.items = JSON.parse(cart.items);
    }
  },
  remove: function () {
    if (confirm('Empty cart')) {
      cart.items = [];
      localStorage.removeItem('cart');
    }
  },
  list: function () {
    this.load();
    const productDetailInCart = [];
    cart.items.forEach((item) => {
      products.forEach((product) => {
        if (item.productId.includes(product.productId))
          productDetailInCart.push({ ...product, qty: item.qty });
      });
    });
    console.log(productDetailInCart);
    return productDetailInCart;
  }
};
