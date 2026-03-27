import { updatedCart } from "./cart.js";
export function cart() {
  let finalPrice = updatedCart.reduce((acc, value) => {
    return acc + value.price;
  }, 0);
  return finalPrice - finalPrice / 10 + (finalPrice * 18) / 100;
}
