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

// 1. Click event:
let btn = document.getElementById('myBtn');
btn.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log('Clicked element:', event.target);
});

// 2. Keyboard event:
document.addEventListener('keydown', function(event) {
  console.log('Key pressed: ' + event.key);
  if (event.key === 'Enter') {
    console.log('Enter was pressed!');
  }
});

// 3. Multiple listeners on same element (both run):
btn.addEventListener('click', function() { console.log('Listener 1'); });
btn.addEventListener('click', function() { console.log('Listener 2'); });
// Both print when button is clicked

// 4. Removing a listener (must use named function):
function handleClick() { console.log('Clicked'); }
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);   // removes it

// HTML: <input id='username'>  <span id='err'></span>  <button id='btn'>Submit</button>

let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  let value = document.getElementById('username').value.trim();
  let err   = document.getElementById('err');

  if ( value === '') {
    err.textContent  = '❌ Username is required!';
    err.style.color  = 'red';
  } else if (value.length < 3) {
    err.textContent  = '❌ Minimum 3 characters!';
    err.style.color  = 'red';
  } else {
    err.textContent  = '✅ Looks good!';
    err.style.color  = 'green';
  }
});
// HTML:
// <form id='myForm'>
//   <input id='name'  type='text'   placeholder='Name'>  <span id='nameErr'></span>
//   <input id='email' type='email'  placeholder='Email'> <span id='emailErr'></span>
//   <input id='age'   type='number' placeholder='Age'>   <span id='ageErr'></span>
//   <button type='submit'>Submit</button>
// </form>

let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();   // STOP page from reloading

  let name  = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let age   = parseInt(document.getElementById('age').value);
  let valid = true;

  // Validate name:
  if (name === '') {
    document.getElementById('nameErr').textContent = '❌ Name required';
    valid = false;
  } else {
    document.getElementById('nameErr').textContent = '✅';
  }

  // Validate email:
  if (!email.includes('@')) {
    document.getElementById('emailErr').textContent = '❌ Invalid email';
    valid = false;
  } else {
    document.getElementById('emailErr').textContent = '✅';
  }

  // Validate age:
  if (isNaN(age) || age < 18) {
    document.getElementById('ageErr').textContent = '❌ Must be 18+';
    valid = false;
  } else {
    document.getElementById('ageErr').textContent = '✅';
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();   // clear all fields
  }
});
// HTML structure:
// <div id='grandparent'>
//   <div id='parent'>
//     <button id='child'>Click Me</button>
//   </div>
// </div>

let grandparent = document.getElementById('grandparent');
let parent      = document.getElementById('parent');
let child       = document.getElementById('child');

grandparent.addEventListener('click', function() {
  console.log('3. Grandparent fired (bubbled here)');
});
parent.addEventListener('click', function() {
  console.log('2. Parent fired (bubbled here)');
});
child.addEventListener('click', function() {
  console.log('1. Child fired (target)');
});

// When you click the BUTTON, output is:
// 1. Child fired (target)
// 2. Parent fired (bubbled here)
// 3. Grandparent fired (bubbled here)
