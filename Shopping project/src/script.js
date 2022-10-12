import { productList } from "./productlist.js";
import { searchProducts } from "./search.js";
import { cart,addProductToCart} from "./cart.js";
import { sStorage,lStorage } from "./storage.js";


lStorage();
sStorage();
cart();
searchProducts();
productList();
addProductToCart();
