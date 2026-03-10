//* Function:
//* Function is a block of code
//* which is used to perform set of instructions.
//* Functions it is used to avoid the repetation of the code.

/// Syntax:
function identifier(params) {
  // code to be executed
}

identifier(); // Function Call Statement (FCS)

/// Example: Non-Parameterized Function
function greet() {
  console.log("Hello, How are you?");
}

greet();

//!Example: parameterized function
function greetWithUserName(name) {
  // name -> Parameter -> Temporary value

  // console.log("Hello, How are you?", name);

  console.log(`Hello, ${name ?? "Guest"} how are you?`);
}

//? function call statement:
//* the fcs statement is responsible for invoke or call the function
greetWithUserName("umang"); //umang -> argument -> actual value
greetWithUserName(); // undefined

//! what is parameter?
//* the parameter is a temporary var of a placeholder which is declared at the time of function definition
//* which will be replaced by the arguments

//!what is arguments?
//* the arguments are the actual values which is passed inside the function call statement

//! what is return keyword or statement in function?
//* the return keyword returns the value back to caller or fcs for furthur use

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

//? 1st way: call the fcs inside te clg
console.log(add(10, 20));

//? 2nd way: store the fcs in variable and print that variable using clg
let result = add(10, 20);
console.log(result);

//! NOTE: if your function is not returning any kind of value you wil get te undefined as a output
function sub(num1, num2) {
  console.log(num2 - num1);
}

console.log(sub(10, 20)); // undefined and output 10

//? Arguments keyword in a function
function getNumbers(num1, num2, num3, num4, num5) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[3]);
}
getNumbers(10, 20, 30, 40, 50);
console.log(Array.isArray(getNumbers(10, 20, 30, 40, 50)));

//! 'this' keyword in function
function thisKeyword() {
  console.log(this);
}
thisKeyword();
