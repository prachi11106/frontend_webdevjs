const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst); // Output: 40

let firstname = "prachi";
let lastname = "kaushik";
//letfullname = firstname + " " + lastname; // concatenation
let fullname = `${firstname} ${lastname}`; // template literal
console.log(fullname); // Output: prachi kaushik

//string literals
let fullName = `${firstname}: this is my first name: ${lastname}`; 
//to print variable with message best method is template literals

let university = " KRMU"; 
let program = "bca";
console.log(`my name is ${firstname} and I am studying ${program} at ${university}`); 

//spread operator : 
//helps to destructure the array and string and gives access to each element individually 
let arr = [1,2,3,4,5]
let arr1 = [6,7,8,9]
let newarray = [...arr,...arr1]; //combining two arrays
console.log(newarray); // Output: [1,2,3,4,5,6,7,8,9]

