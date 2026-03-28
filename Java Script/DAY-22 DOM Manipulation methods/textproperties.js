"use strict";

console.log("Text Properties in JS");

//! 1.textContent:
//* The textContent it is used to help to get or set content of an html element.
//* It will returns the text which is visible on the screen as well as hidden text excluding the tag.

//? for getting : console.log(Element.textContent);
//? for setting : element.textContent = value;

//? How to access the content or text present inside a html element:
let para = document.getElementById("para");
console.log(para.textContent); // This is a simple paragraph created in HTML

let divContent = document.getElementById("divContent");
console.log(divContent.textContent);

//! 2. innerText:
//* The innerText it is used to help to get or set content of an html element
//* It will returns the text which is visible on the screen not the hidden text excluding the tag.

//? For Getting: console.log(para.innerText)
//? For Setting: element.innerText = value;

console.log(para.innerText); // This is a simple paragraph created in HTML
console.log(divContent.innerText);

para.innerText = "new updated content";
console.log(para);

//! 3. innerHTML:
//* The innerHTML it is used to get or set the text content for html element with including tag.

//? For Getting: console.log(element.innerHTML)
//? For Setting: element.innerHTML = <tagName> Content </tagName>

console.log(para.innerHTML);

let container = document.getElementById("container");
// container.innerHTML = "heading updated";

container.innerHTML += (
  <h1 class="head" style="color: red">
    {" "}
    Heading-1{" "}
  </h1>
);

console.log(container.outerHTML);
