import { removeProductById, showArray } from "./cart.js";
import { cart } from "./cartPrice.js";
import { allProducts, arr, getProduct, products } from "./product.js";

// allProducts();
getProduct(10);
getProduct(7);
getProduct(1);
// Displaying cart
showArray();

let updatedCart = removeProductById(1);
console.log(updatedCart);

let finalPrice = cart();
console.log("Your Total price with 10% discount and 18% tax is:", finalPrice);
