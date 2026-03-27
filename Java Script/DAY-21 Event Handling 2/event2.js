"use strict";

//! 4. Clipboard events:
//? cut , copy , paste

let myContent = document.getElementById("myContent");

// myContent.addEventListener("copy", () => {
//   console.log("Text has been copied to clipboard");
// });

myContent.addEventListener("copy", (e) => {
  e.preventDefault();
  let customData = "Dont try to be over smart";
  e.clipboardData = customData;
});
myContent.addEventListener("cut", () => {
  console.log("Text has been cut!");
});
myContent.addEventListener("paste", () => {
  console.log("Text has been pasted here!");
});

//! 5. Window Events:
//* The window events are directly applied to the window object.
//? load,scroll,resize

window.addEventListener("load", () => {
  console.log("page fully loaded");
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  username.value = "john@gmail.com";
  password.value = "123456";
});

//? scroll event:
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
});

//? resize event:
window.addEventListener("resize", () => {
  console.log(`width: ${window.innerWidth}, height: ${window.innerHeight}`);
});

// if (navigator.onLine) {
//   console.log("you are online");
// } else {
//   console.log("you are offline");
// }
let updateStatus = () => {
  if (navigator.onLine) {
    document.body.style.backgroundColor = "green";
    document.getElementById("status").innerText = "user is online";
  } else {
    document.body.style.backgroundColor = "red";
    document.getElementById("status").innerText = "user is offline";
  }
};

updateStatus();
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
