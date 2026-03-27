"use strict";
//! What is Object?
//* The object is a collection of different multiple key-value pair.

//* The programmatical representation of a real life entity is called as object in JavaScript.

//? property = key + value

//! Ways to create an object:
//? 1. By using Object Literals - {}
//? 2. By using object constructor - new Object()

let obj = new Object();
console.log(obj); // {}

//! Syntax to add the properties inside the
//? empty or existing object:
//? obj_ref_var.keyName = value;
obj.username = "Bipin";
console.log(obj);

//! By using object Literal:

let human = {
  name: "Bipin",
  age: 22,
  status: true,
  isMarried: undefined,
  isChild: null,
};
console.log(human);

//! How we can access the object properties or keyname:

//? There are two ways to access the object properties:
//* 1. By using Dot (.) Notation
//* 2. By using Square-Bracket ([]) Notation

//* 1. By using Dot (.) Notation
//? Syntax: obj_ref_var.keyName
console.log(human.name);
console.log(human.age);

//! How to add the new property inside the existing object:
//? obj_ref_var.keyname = value;
human.address = "pakistan";
console.log(human);
console.log(human.address);

//! how to delete the property inside the object:
//? Syntax: delete obj_ref_var.keyname

delete human.isChild;
console.log(human);

//! what is method inside a object?
//* A method is a simple javascript function which is stored inside the object

let car = {
  brand: "Ford Mustang",
  model: "GT",
  price: "75 lakhs",
  color: "red",
  start: () => {
    console.log("Engine started...");
  },
};

console.log(car.brand);
car.start();

//! this keyword inside the object:
function thisKeyword() {
  console.log(this);
}

thisKeyword();

let thisKeywordObj = {
  username: "john",
  demo: () => {
    console.log(this);
  },
};
console.log(thisKeywordObj);

//! Object Methods:
let employee = {
  eName: "John",
  eAge: 20,
  eSalary: 30000,
  eStatus: true,
  eAddress: "Ahmedabad",
};
console.log(employee);

//! Object.keys():
//* It will return all the keys of an object
console.log(Object.keys(employee)); //[ 'eName', 'eAge', 'eSalary', 'eStatus', 'eAddress' ]

//! 2. Object.values():
//* it will return all the values of an object.
console.log(Object.values(employee)); //[ 'John', 20, 30000, true, 'Ahmedabad' ]

//! 3. Object.assign()
//* It os used to merge the two different object
let obj1 = { username: "uamng" };
let obj2 = { age: 20 };
// let merged = Object.assign(obj1, obj2);
let merged = { ...obj1, ...obj2 };
console.log(merged);

//! 4. Object.Entries():
//* it will convert the nested [key,value] pair in the object
let laptop = [
  ["brand", "asus"],
  ["model", "f15"],
  ["price", "60000"],
];

console.log(Object.fromEntries(laptop));

//! 5. Object.Entries
//* it will convert the property of an object into an nested array[key,value] pair in the form of array
let updatedObject = Object.entries(employee);
updatedObject[0][0] = "Name";
console.log(Object.fromEntries(updatedObject));

//! Advance for loops: for-of & for-in loops
for (let key in employee) {
  console.log(key);
  console.log(employee[key]);
}

let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
  console.log(element);
}

let str = "hello";
for (let char of str) {
  console.log(char);
}

for (let key in arr) {
  console.log(key);
  console.log(arr[key]);
}

//? for-in -> Object
//? fro-of -> array or string or iterable object
