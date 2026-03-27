"use strict";

console.log("DOM Remaining methods");

//! 3. document.getElementByTagName():
//* The document.getElementByTagName() method allows us to access the multiple html element by their specified tag name.
//? Syntax: document.getElementByTagName("tagName:string");
//? Return type: HTML Collection

let allSpan = document.getElementsByTagName("span");
[...allSpan].forEach((s) => {
  s.style.backgroundColor = "yellow";
});

//! 4. document.getElementByName():
//* The document.getElementByName() method allows us to access the multiple html element by their specified name attribute value.
//? Syntax: document.getElementByName("name-attribute:string");
//? return type : Node List

let genders = document.getElementsByName("gender");
console.log(genders);

//~ What is a NodeList?
///* The collection of different types of nodes (element,text,attribute,comment,etc) is called as Node List.
//* By default NodeList supports forEach() method but not map() method

genders.forEach((gen) => {
  gen.style.accentColor = "red";
});

//! 5.document.querySelector:
//* The document.querySelector() method allows us to access the first-matching css selector element.
//? syntax: document.querySelector("css-selector");
//? Return Type: First matching CSS Selector

let male = document.querySelector("#male");
console.log(male);

//! 6. document.querySelectorAll():
//* The document.querySelectorAll() method allows us to access the all matching css selector element.
//? syntax: document.querySelectorAll("css-selector");

let allGenders = document.querySelectorAll("input[type='radio']");
console.log(allGenders);

let h2InsideDiv = document.querySelector("div > h2");
console.log(h2InsideDiv);
