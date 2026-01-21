//let numbers = [1,2,3,4,5];
//let sliced = numbers.slice(1,4);
//console.log(sliced); // Output: [2, 3, 4]

//let number = [10,20,30,40,50];
//let hasEven = number.some(x => x % 2 === 0);
//console.log(hasEven);

//let number1 = [2,5,6,7,8];
//let allEven = number1.every(x => x%2 == 0);
//console.log(allEven);
 
 //let fruits1 = ["apple", "banana"];
 //let fruits2 = ["cherry", "orange"];
 //let combined = fruits1.concat(fruits2);
 //console.log(combined);

 //splice example
 //let arr = [1,2,3,4,5];
 //arr.splice(2,1,'a','b');
 //console.log(arr); // Output: [1, 2, 'a', 'b', 4, 5]

 //sir example
 let fruits = ["apple", "banana", "cherry"];
 fruits.splice(1, 1, "orange", "grape");
 console.log(fruits); // Output: ["apple", "orange", "grape", "cherry"]

//home all js string methods practice
let message = "Hello, welcome to JavaScript programming!";
console.log(message.length); // Output: 36

//2. string slice
let str = "JavaScript is fun";
let slicedStr = str.slice(0, 10);
console.log(slicedStr); // Output: "JavaScript"

//3 substring
let str1 = "Hello, World!";
let substr1 = str1.substring(7, 12);
console.log(substr1); // Output: "World"    

//4 indexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst); // Output: 40

// substr