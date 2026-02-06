const heading = document.getElementById("heading");
console.log(heading);

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";

console.log(heading.textContent);
heading.textContent = "Hello from JavaScript!";

const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);    

for(let i = 0; i < subHeading.length; i++) {
    subHeading[i].style.fontSize = "24px";
    subHeading[i].textContent = "Sub-heading modified by JavaScript!";
    subHeading[1].style.color = "green";
}

