let element = document.getElementById("demo");

element.innerText = "Hello World";
element.style.color = "blue";
  

let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    alert("Button clicked!");
});

setTimeout(function() {
    console.log("Hello after 3 seconds");
}, 3000);

let promise = new Promise(function(resolve, reject) {
    let success = true;

    if(success){
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise
.then(result => console.log(result))
.catch(error => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
