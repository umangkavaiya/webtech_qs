"use strict";
// Programming Tasks: (By Using String and Array Methods)
// ------------------------------------------------------

// 1. Get File Extension
// Create a function getExtension(file) that returns the file extension.
// Example:
//  getExtension("photo.png") // png
//  getExtension("document.pdf") // pdf

// 2. Count Vowels in a String
// Create a function countVowels(str) that returns the number of vowels in the string.
// Example:
//  countVowels("javascript") // 2
//  countVowels("hello") // 2

// 3. Capitalize First Letter of Each Word
// Create a function capitalizeWords(str) that capitalizes the first letter of every word.
// Example:
//  capitalizeWords("hello world")
//  // Hello World

// 4. Reverse a String
// Create a function reverseString(str) that returns the reversed string.
// Example:
//  reverseString("hello")
//  // olleh

// 5. Check Palindrome
// A palindrome is a word or number that reads the same forward and backward.
// isPalindrome(str) -> Function Name
// Example:
//  isPalindrome("madam") // true
//  isPalindrome("hell0") // false

// 6. Find Maximum Number
// Create a function getMax(arr) that returns the largest number from the array.
// Example:
//  getMax([10, 5, 8, 25, 3]) // 25

// 7. Remove Duplicate Elements
// Create a function removeDuplicates(arr) that removes duplicate values from an array.
// Example:
//  removeDuplicates([1,2,3,2,4,1,5]) // [1,2,3,4,5]

// 8. Sum of All Numbers
// Create a function sumArray(arr) that returns the sum of all numbers.
// Example:
//  sumArray([1,2,3,4,5]) // 15

// 9. Find Even Numbers
// Create a function getEvenNumbers(arr) that returns only even numbers.
// Example:
//  getEvenNumbers([1,2,3,4,5,6]) // [2,4,6]

// 10. Double the Numbers (map)
// Create a function doubleNumbers(arr) that returns a new array where each number is doubled.
// Example:
//  doubleNumbers([1,2,3,4]) // [2,4,6,8]

// 11. Find First Number Greater than 50 (find)
// Create a function findNumber(arr) that returns the first number greater than 50.
// Example:
//  findNumber([10,20,55,30,70]) // 55

// 12. Total Price of Products (reduce)
// Create a function getTotalPrice(products) that returns the total price of all products.
// Example:
//  const products = [
//    {name:"pen", price:10},
//    {name:"book", price:50},
//    {name:"bag", price:100}
//  ]

//  getTotalPrice(products) // 160

const getExtension = (file) => {
  let extension = file.split(".")[1];

  return extension;
};
console.log(`The extension of the given file is ${getExtension("image.jpeg")}`);

const countVowels = (string) => {
  string = string.trim().toLowerCase();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("umangA"));
const initCap = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(
  `the string with initcap : ${initCap("hey umang how are you fine !")}`,
);
let str = "hello";

const strReverse = (str) => {
  let rev = str.split("").reverse().join("");
  return rev;
};
console.log(strReverse("sjdbfjasvjvfsa fksvs"));

const checkPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str == reversed;
};

console.log(checkPalindrome("madam"));

const getMax = (arr) => {
  return Math.max(...arr);
};
console.log(getMax([10, 20, 40, 90, 50]));

const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

let arr = [10, 20, 30, 10, 20];
console.log(removeDuplicates(arr));
// arr.splice(0, 1);
// console.log(arr);
