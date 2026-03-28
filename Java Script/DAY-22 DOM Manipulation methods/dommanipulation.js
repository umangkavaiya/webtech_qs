"use strict";

//! createElement():
//* The document.createElement() is used to create a new element by JS.
//? Syntax: document.createElement("tagName")

let para = document.createElement("p");
console.log(para);

//! How to add attributes to the dynamically to the newly created HTML element:

//? 1. Directly -> element.attributeName = value;
// para.className = 'para';
para.id = "para1";
console.log(para);

//! 2. appendChild():
//* The appendChild() method is used to add the child element inside a dom tree or specified parent element
//? Syntax: parentElement.appendChild(childElement);

document.body.appendChild(para);
para.textContent = "Content created dynamically";

document.getElementById("btn").addEventListener("click", () => {
  let heading2 = document.createElement("h2");
  let container = document.getElementById("container");
  container.appendChild(heading2);
  heading2.textContent = "Heading 2 created dynamically";
});

document.getElementById("btn2").addEventListener("click", () => {
  let image = document.createElement("img");
  console.log(image);

  image.src = "https://picsum.photos/300/200";
  image.alt = "dummy image";
  image.id = "image";

  //! add inside a parent element
  document.body.appendChild(image);
});

//! 3. removeChild():
//* The removeChild() method is used to remove the child element from a dom tree.
//? syntax: parentElement.removeChild(childNode)

document.getElementById("removePara").addEventListener("click", () => {
  document.body.removeChild(para);
});

let head = document.getElementById("head");
console.log(head.textContent); // DOM Manipulation in JS

head.textContent = "Updated Methods";
