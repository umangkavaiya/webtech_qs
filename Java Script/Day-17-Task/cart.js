import { arr } from "./product.js";

export function showArray() {
  console.log(arr);
}
export let updatedCart;
// creating a function which will remove the items from the cart
export function removeProductById(id) {
  updatedCart = arr.filter((item) => {
    return id != item.id;
  });
  return updatedCart;
}
