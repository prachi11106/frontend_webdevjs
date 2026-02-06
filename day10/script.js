const head = document.getElementById("heading");

console.log(head.innerText) //it will show only the visible text

console.log(head.textContent) //it will show all the text including hidden text

console.log(head.innerHTML) //it will show all the text with its tag/element



// DOM Modification
// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph.textContent);

// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

//remoe the <p> element fro, the container
// way1.
//const elementToRemove = document.querySelector("p");
//elementToRemove.remove();
//way2.
document.querySelector("#container p").remove();

function handleClick() {
    document.getElementById("output").textContent="button Clicked!";
}