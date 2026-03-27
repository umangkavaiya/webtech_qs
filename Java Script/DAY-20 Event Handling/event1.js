"use strict";

//! What is an Event?
//* The event is an object in JavaScript.
//* The actions performed by the user is called as event.
//* Whenever you trugger the event, automatically one function will be called.
//? For Example: Clicking on the button-> click
//? typing inside the input field -> change,input
//? hovering on the element -> mouseover
//? submitting the form -> submit
//? copy, pasting the data -> cut,paste,copy
//? scrolling the window or resize -> scroll,recize

//! Types of events:
//? 1. Mouse Events -> mouseover, mouveeave, dblclick
//? 2. Keyboard Events -> keypress, keydown, keyup
//? 3. Form Event -> submit, change, input, focus, blur
//? 4. Clipboard Events -> cut, copy, paste
//? 5. Window Event -> load, scroll, resize

//! What is addEventListener() Method:
//* The addEventListener Method is used to attach the event externally to HTML element in JS.
//? Syntax: htmlElement.addEventListener("string:event_type", (callback function){(e)=>{}});
//? Syntax: htmlElement.addEventListener("string:event_type",externalCallbackFunction);

//! Mouse Events:

let handleButton = () => {
  console.log("Button is clicked ");
};

// document.getElementById("btn").addEventListener("click", handleButton);

// let container = document.getElementById("container");
// container.addEventListener("mouseover", () => {
//   container.style.backgroundColor = "green";
//   container.innerText = "pakda gaya";
// });

//! 2. Keyboard Events:
//? keyup, keydown, keypress(deprecated)
let keyboardInput = document.querySelector("[type='text']");

keyboardInput.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Control" || e.key === "c") {
    alert("Don't try to copy paste");
  }
});

// document.querySelector("[type='password']").addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

//! 3. Form Events:
//? submit,change,input,focus,blur

let loginForm = document.getElementById("loginForm");

let username = document.getElementById("username");
let password = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("please fill all the fields");
  } else {
    console.log("Login form details:", {
      username: username.value,
      password: password.value,
    });

    //? Manually empty the input fields
    // username.value = "";
    // password.value = "";

    //? By using inbuilt Method
    loginForm.reset();
  }
});

//! Focus and Blur event
username.addEventListener("focusin", () => {
  username.style.border = "2px solid green";
  username.style.borderRadius = "3px";
});

username.addEventListener("blur", () => {
  if (username.value === "") {
    username.style.border = "2px solid red";
  } else {
    username.style.border = "2px solid gray";
  }
});

password.addEventListener("focus", () => {
  password.style.border = "2px solid green";
  password.style.borderRadius = "3px";
});

password.addEventListener("blur", () => {
  if (password.value === "") {
    password.style.border = "2px solid red";
  } else {
    password.style.border = "2px solid gray";
  }
});

//! change event:
//* It will provide the value after the complete change in the input field.
let userInput = document.getElementById("userInput");

userInput.addEventListener("change", () => {
  console.log(userInput.value);
  document.getElementById("para1").innerText =
    `Change event output: ${userInput.value}`;
});

//! input event:
//* It will provide the real-time value of an input field.
userInput.addEventListener("input", () => {
  console.log(userInput.value);
  document.getElementById("para2").innerText =
    `input event output: ${userInput.value}`;
});
