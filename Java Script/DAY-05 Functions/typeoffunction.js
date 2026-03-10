console.log("Types of Functions");

//! Types of Functions:
//? 1. Named Function
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE Function
//? 5. Arrow Function
//? 6. Callback Function
//? 7. Higher-Order Function (HOF)
//? 8. Nested Function
//? 9. Closure Function
//? 10. Function Currying
//? 11. Generator Function

//! 1. Named Function:
//* The function which has a identifier or name is called as Named Function.
//* It is also called as Function Declaration.

function jetha(person) {
  console.log(`Jetha: Good Morning ${person} jiii!!`);
}
jetha("Babita");

//! 2. Anonymous Function:
//* The function which don't have an identifier or name is called as anonymous function.

// function () {
//     console.log("I am Mr.x");
// }

//? 1st option: Wrap the entire function in empty () and call the () inside the main () just after the function declaration.

(function () {
  console.log("I am Mr.x");
})();

//! 3. Function as an Expression: (First Order Function)
//? 2nd option: Store the entire function inside the variable and use the variable to call the anonymous function.

let fun = function () {
  console.log("I am a anonymous function");
};
console.log(fun);
fun();

//! 4. IIFE:
//* IIFE stands for Immediate Invoking Function Expression.
//* It will invoked just after the function declaration.
//* It will be executed only once.

console.log("Interrupted the IIFE function");
(function () {
  console.log("IIFE function");
  //   alert("IIFE invoked");
})();

//! 5. Arrow function:
//* The arrow function is shorthand syntax to create the function in JS.
//* This is the modern or recommended way to use the function
//* Arrow function was introduced in the ES6 concepts which was released in the year of 2015

//? Syntax: () => {}
let arrFun = () => {
  console.log("This is arrow function");
};
console.log(arrFun);
arrFun();

//! 1. Implicit Return in Arrow Function:
//* Automatically -> Internally

let greet = () => console.log("Hello");
greet();

let add = (num1, num2) => num1 + num2;
console.log(add(10, 20));

//! 2. Explicit Return in Arrow Function:
//* Manually
let mul = (num1, num2) => {
  console.log("Multiply Operation");
  return num1 * num2;
};
console.log(mul(10, 20));

//! arguements keyword in arrow function:
let arguFun = () => {
  // console.log(arguments); // Arguments is not defined
};
arguFun(10, 20, 30, 40, 50);

//! 6. Callback Function:
//* the function which is passed to the another function as an arguement is called as callback function
//* Callback function will be executed just after the completion of main function

//! Main function:
function mainFun(demo) {
  console.log("Main Function is running...");
  console.log(demo);
  demo();
  // callBackfun();
}
mainFun(callBackfun);

//! callback function:
function callBackfun() {
  console.log("Callback function");
}
//! Realtime example:
function orderFood(waiter) {
  console.log(`Waiter : Panner Tikka Masala
        Garlic Naan
        chaas`);
  waiter();
}
orderFood(serveFood);
// orderFood(parcelFood);
function serveFood() {
  console.log("Waiter :  food is ready Sir! Enjoy your meal");
}
function parcelFood() {
  console.log("Pack the food!");
}
document.getElementById("btn1").addEventListener("click", () => {
  orderFood(serveFood);
});
document.getElementById("btn2", () => {
  orderFood(parcelFood);
});

function assignment(student) {
  console.log("Teacher assigned you one task");
  // console.log(student);

  student();
}
assignment(student);
function student() {
  console.log("Assignment completed...");
}

console.log("Remaining Functions.....");

//! 7. Higher-Order Function: (HOF)
//* The Higher-order Function which will accept another function as a parameter or it will return a new function.

//! Here, calculate -> HOF
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

//! add -> callback fun
function add(num1, num2) {
  return num1 + num2;
}
//! sub -> callback fun
function sub(num1, num2) {
  return num2 - num1;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));

//! 8. Nested Function:
//* The function which is present inside another function is called as nested function.

function outerFun() {
  let outerVar = 10;
  console.log("Outer function called");

  function innerFun() {
    console.log("Inner Function called");
    console.log(outerVar);
  }
  innerFun();
}
outerFun();
// innerFun();

//! 9. Closure Function:
//* When you are trying to access the value of outer function inside the inner function and it will remember the value of the outer function is known as a Closure Function.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Count:", count);
    return count;
  }
  //   inner();
  return inner;
}
// outer(); // 1
// outer(); // 1

let counter = outer();
// counter = inner();
// console.log(counter);
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//! 10. Function Currying:
//* A function currying means passing one argument at a time to invoke the function.

//! Normal Function:
function add(a, b, c) {
  return a + b + c;
}
console.log(add(10, 20, 30));

//! Curried Function:
function fun1(a) {
  console.log("a:", a);
  return function fun2(b) {
    console.log("b:", b);
    return function fun3(c) {
      console.log(a + b + c);
      return a + b + c;
    };
  };
}
console.log(fun1(10)(20)(30));

let fun1 = (a) => (b) => (c) => a + b + c;
console.log(fun(1)(2)(3));

//! 11. Generator Function:
//* The generator function is a special type of function in JavaScript which will be pause and resume its execution.

//? Syntax: function*

//! yield -> yield keyword is used to pause the execution of the function and it will store the value.

//! .next() -> .next() method is used to resume the execution of the function and it will return one object which has two properties -> {value:x, done:true or false}

function getNumbers() {
  console.log(1);
  console.log(2);
  console.log(3);
}
getNumbers();

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
  return "Hello";
  //   console.log("Hello");
}
let gen = numbers();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: undefined, done: true}
