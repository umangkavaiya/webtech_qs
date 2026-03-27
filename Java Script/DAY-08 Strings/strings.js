"use strict";
//! String:
//* A string is a collection of characters.
//* We can create string in 2 ways:
//? 1. By using string literal - '', "", ``
//? 2. By using string Constructor - new String()
//! 2. By using string constructor:
let str = new String("Hello");
console.log(str);

//! String properties: length
let str2 = "Hello World!";
console.log(str2.length);

//! String Methods:
//? 1. charAt()
let str3 = "javascript";
console.log(str3.charAt(2));
console.log(str3.charAt(40)); // log the nothing
console.log(str3.charAt(-1)); // log the nothing

//? 2. charCodeAt()
console.log(str3.charCodeAt(1)); // 97

//? 3. indexOf():
let str4 = "hasde chera da matalab ye nhi";

console.log(str4.indexOf("da")); // 1
console.log(str4.indexOf("a", 2)); // 10

//? 4. lastIndexOf()
console.log(str4.lastIndexOf("a")); // 20

//? 5. slice()
let str5 = "dum na dasa hage batasa";

console.log(str5.slice(12)); // hage batasa
console.log(str5.slice(12, -1));

//? 6. substring()
console.log(str5.substring(12));

//? 7. concat()
let str6 = "hello";
let str7 = "world";
console.log(str6.concat(str7));

//? 8. trim()
let str8 = "     Ghayal   hu isliye ghatak hu    ";
console.log(str8.length);
console.log(str8.trim());
console.log(str8.trim().length);

//? 9. trimEnd
//? 10. trimStart

//? 11. padStart()
let card = "1234";
let maskedCard = card.padStart(16, "*");
console.log(maskedCard);

//? 12. padEnd()
let mobileNo = "9370";
console.log(mobileNo.padEnd(10, "*"));

//? 13. replace()
let str9 =
  "Java is a Scripting Language and Java is used to design frontend part";
console.log(str9.replace("Java", "JavaScript"));

//? 14.replaceAll()
console.log(str9.replaceAll("Java", "javascript"));

//? 15. includes()
console.log(str9.includes("java"));
console.log(str9.includes("javascript"));

//? 16. toUpperCase
//? 17. split()
let str10 = "HTML CSS JS";
console.log("for split");
console.log(str10.split(" "));
console.log(str10.split(""));

let str11 = "rohit@gmail.com";
console.log(str11.split("@"));
console.log(str11.split("@")[0]);

let str12 = "html-java-python";
console.log(str12.split("-", 2));

//? 18. repeat()
let str13 = "hello";
console.log(str13.repeat(5));
