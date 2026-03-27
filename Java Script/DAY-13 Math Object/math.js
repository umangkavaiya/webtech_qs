"use strict";

//! Math Object:
//* The Math object is a inbuilt object in Javascript which will provide set of mathematical constants,properties and methods to perform operations.

//? It is object of window (global) object.

//* Math object does not need to create their instance, without creating the instance you can use the Math object.

// let myMath = new Math();
// console.log(myMath); // Math is not a constructor

console.log(Math);
console.log(typeof Math); // object

//? Syntax: Math.propertyName or Math.methodName();

//! Math Properties:

//? 1. Math.E:
console.log(Math.E); // 2.718281828459045

//? 2. Math.PI:
console.log(Math.PI); // 3.14 or 22/7

//! Math Methods:

//? 1. Math.round():
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.3)); // 2

//? 2. Math.ceil():
console.log(Math.ceil(5.1)); // 6
console.log(Math.ceil(5.9)); // 6

//? 3. Math.floor():
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(5.9)); // 5

//? 4. Math.pow(base, exponent):
console.log(Math.pow(2, 2)); // 4

//? 5. Math.sqrt():
console.log(Math.sqrt(49)); // 7

//? 6. Math.cbrt():
console.log(Math.cbrt(27)); // 3

//? 7. Math.max():
console.log(Math.max(23, 67, 54, 23, 12, 78, 90, 56)); // 90

//? 8. Math.min():
console.log(Math.min(23, 67, 54, 23, 12, 78, 90, 56)); // 12

//? 9. Math.abs():
console.log(Math.abs(12.89));
console.log(Math.abs(-12.89));

//? 10. Math.trunc():
console.log(Math.trunc(10.45)); // 10

//? 11. Math.random():
function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000);
}

const h2ELement = document.getElementById("showOtp");
const otpButton = document.getElementById("OTPbutton");

otpButton.addEventListener("click", (h2ELement.textContent = generateOtp()));
