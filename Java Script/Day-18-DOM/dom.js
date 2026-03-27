//! DOM:
//* DOM stands for Document Object Model
//* DOM is an API means Application Programming Interface.
//* It is used to access the HTML element inside JavaScript to provide the functionalities.
//* DOM is a hirearchical representation of an HTML document in the form of tree like structure.

//! Why do we need DOM?
//? 1. To access the HTML elements
//? 2. Without DOM, we cannot manupulate the HTMLstructure
//? 3. It is the bridge between HTML document and JS logic.

//! Types of DOM:
//* 1. Core DOM
//* 2. HTML DOM-> We are going to use HTML DOM to maniuplate the HTML Doc.
//* 3. XML DOM
//* 4. React DOM

//! What is Node?
//* A node is a basic buliding block in JS DOM structure.
//* each and every element is a node but each and every node is not an element.
//* There are different types of node:

//? 1. Element Node: div, h1, p, img etc.
//? 2. Text node: text which is present inside the element
//? 3. Attribute node: tepresents the attributes of each element: id,class etc
//? 4. comment node : represents comments in HTML document
//? 5. lead node: leaf node is the last present node in the hirearchy of the DOM structure.
//?6. document node: top most node: entry point: window global object
//? 7. Document Fragement node.

//! What is Document?
console.log(document); // it displays the HTML structure or document
console.log(window.document); // it is the same thing

//! Properties of a document:
//? 1. document.title:
console.log(document.title);
document.title = "Hello world";
console.log(document.title);

console.log(document.body);
console.log(document.head);
console.log(document.URL);
console.log(document.all); // depricated

//! Direct Access by using document:
//? 1. document.images:
console.log(document.images);

//? 2. document.links:
console.log(document.links);

//? 3. document.forms:
console.log(document.forms);

//? 4. document.scripts:
console.log(document.scripts);

//? 5. document.StyleSheets:
console.log(document.styleSheets);

//! DOM Access Method:
//! document.getElementById():
//* The doucment.getElementByID() method allows us to access the html element by their specified id.
//? syntax: document.getElementById("elementId:String");
//? return type: HTML Element / null
let heading = document.getElementById("heading");
console.log(heading); // returns the whole element
//~ how to style an HTML element by JS;
heading.style.color = "red";
heading.style.backgroundColor = "yellow";

//! document.getElementsByClassName():
//* The document.getElementsByClassName() method allows us to access the multiple html element by their specified class name.
//? Syntax: document.getElementsByClassName("elementClassName:string");
//? return type:HTMLCollection
//~ what is HTMLCOllection?
//* The collection of html elements only is callled as an HTML collection
let paras = document.getElementsByClassName("para");
console.log(paras);
console.log(Array.isArray(paras)); // false
//! Ways to convert an HTMLcollection into an array.
//? 1. Array.from():
let convertedArray = Array.from(paras);
console.log(convertedArray);
console.log(Array.isArray(convertedArray)); // true
convertedArray.map((p) => {
  p.style.border = "1px dashed black";
});

//? 2. By using spread operator;(...varName)
let paraArray = [...paras];
console.log(paraArray);
paraArray.forEach((p) => {
  p.style.color = "red";
  p.style.backgroundColor = "gold";
});

console.log(Array.isArray(paraArray));
