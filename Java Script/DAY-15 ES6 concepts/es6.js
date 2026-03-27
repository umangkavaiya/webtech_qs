"use strict";

//! What is ES6 concepts?
//* ES stands for ECMA script which was released in the year of 2015
//* This is a major update in JS history after the ES5.
//* in the ES6 concepts they introduced some features such as:

//? 1. let and const
//? 2. arrow function
//? 3. symbol()
//? 4. String template literal (backticks)
//? 5. function with default parameter
//? 6. Destructuring
//? 7. Rest parameter and spread parameter
//? 8. promises
//? 9. async / await
//? 10. class
//? 11. JS modules

//! 5. Function with default parameter:
//* the variables which are declared at the time of function declaration is called as parameter in function
//* temporary variable

function greet(name = "guest") {
  console.log(`My name is ${name}`);
}

greet();

//! 6. Destructuring:
//* the breaking down of big  structure into small pieces for easy use.
//* we can perform destructuring for array and object:
//? 1. Array Destructuring:
let cricketers = ["sachin", "virat", "rohit", "kapil"];
let [...arr] = cricketers;
console.log(arr);

//? 2. Object Destructuring:

let employee = {
  eName: "john",
  eAge: 20,
  eSalary: 30000,
};

let { eName, eAge, eSalary } = employee;
console.log(eName, eAge, eSalary);

//~ special note: while destructuring objects we should always use key names in dummy variables and if there are same key names then we can give alias names like name:alias_name

const product = {
  id: "p101",
  name: "wireless headphone",
  specs: {
    color: "matte black",
    weight: "250 gram",
  },
  manufacturer: {
    name: " Audio tech",
    specs: { location: "amd", warranty: "2 yrs", name: "audio tech global" },
  },
};

//* Direct way
// let { id, name, specs, manufacturer } = product;
// console.log(id);
// console.log(name);
// console.log(specs);
// console.log(manufacturer);

// let {color,weight} = specs;
// console.log(color);
// console.log(weight);

// let {name: mName , specs: mSpecs} = manufacturer;
// console.log(mName);
// console.log(mSpecs);

// let {location: loc,warranty,name: globalName} = mSpecs;
// console.log(loc);
// console.log(warranty);
// console.log(globalName);

//* Indirect way
let {
  id,
  name,
  specs: { color, weight },
  manufacturer: {
    name: mName,
    specs: { location: loc, warranty, name: globalName },
  },
} = product;
console.log(loc);
