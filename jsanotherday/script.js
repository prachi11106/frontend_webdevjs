const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");


let sampleEvent =
    [
        {
            title: "Web dev",
            date: "4-12-2026",
            category: "workshop",
            description: "hasvhuno oadhoo asoikla dfoi"
        },
        {
            title: "Web dev2",
            date: "5-12-2026",
            category: "conference",
            description: "hasvhuno oadshdbf hoo asoikla dfoi"
        }
    ]

    addSampleBtn.addEventListener("click",()=>{
        sampleEvent.forEach(addEvent);
    })


//   create event card  
function createEventCard(eventData){
    const card = document.createElement("div");
    card.className="event-card";

    card.innerHTML=`
    <button class="delete-btn">X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `
    return card;

}

function addEvent(eventData){
  const emptyState=document.querySelector(".empty-state");
  if(emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(eventData));

}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }

    addEvent(eventData);
    eventForm.reset();

})

// clear all event
clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML=`<div class="empty-state">No events yet. Add your first event!</div>`
})


// delete indivisual card
eventContainer.addEventListener("click",(event)=>{
    //closest use to target the closest child element of the targeted element i.e eventContainer.
    const card = event.target.closest(".event-card");
    console.log(card); //newly created event data

    if(event.target.classList.contains("delete-btn")){
        card.remove()
    }

 if(!eventContainer.querySelector(".event-card")){
    eventContainer.innerHTML=`
     <div class="empty-state">No events yet. Add your first event!</div>`
 }
})

// event name-keydown: to track the keys which pressed by the user

function multiply(a, b) {
  return a * b;             // Step 4: returns 25, popped off stack
}

function square(n) {
  return multiply(n, n);    // Step 3: calls multiply → pushed onto stack
}

function printSquare(n) {
  let result = square(n);   // Step 2: calls square → pushed onto stack
  console.log(result);
}

printSquare(5);             // Step 1: called → pushed onto stack

// Call Stack step by step:
// → [GEC]
// → [printSquare] [GEC]
// → [square] [printSquare] [GEC]
// → [multiply] [square] [printSquare] [GEC]
// ← multiply returns 25   → popped
// ← square returns 25     → popped
// ← printSquare logs 25   → popped
// → [GEC] only — done


// Real scenario: Login → Fetch Profile → Fetch Posts → Display

login(username, password, function(err, user) {
  if (err) { handleError(err); return; }

  getUserProfile(user.id, function(err, profile) {
    if (err) { handleError(err); return; }

    getUserPosts(profile.id, function(err, posts) {
      if (err) { handleError(err); return; }

      displayDashboard(user, profile, posts, function(err, result) {
        if (err) { handleError(err); return; }

        console.log('Dashboard loaded!', result);
        // Imagine even MORE nesting here...
      });
    });
  });
});
// Creating a Promise:
let myPromise = new Promise(function(resolve, reject) {
  // Do some async work here (e.g., fetch data, read file)...
  let success = true;

  if (success) {
    resolve('Data loaded successfully!');   // fulfill the promise
  } else {
    reject(new Error('Something went wrong!'));  // reject it
  }
});
// HTML needed:
// <input id='taskInput' type='text' placeholder='Enter task'>
// <button id='addBtn'>Add Task</button>
// <ul id='taskList'></ul>

let input    = document.getElementById('taskInput');
let addBtn   = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
  let text = input.value.trim();
  if (text === '') return;   // do nothing if empty

  // 1. CREATE list item:
  let li = document.createElement('li');
  li.textContent = text;

  // 2. CREATE delete button:
  let delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', function() {
    li.remove();   // 3. REMOVE the li when delete clicked
  });

  // 4. APPEND button into li, then li into list:
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = '';   // clear the input
});
// HTML needed:
// <input id='taskInput' type='text' placeholder='Enter task'>
// <button id='addBtn'>Add Task</button>
// <ul id='taskList'></ul>

let input1    = document.getElementById('taskInput');
let addBtn2   = document.getElementById('addBtn');
let taskList3 = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
  let text = input.value.trim();
  if (text === '') return;   // do nothing if empty

  // 1. CREATE list item:
  let li = document.createElement('li');
  li.textContent = text;

  // 2. CREATE delete button:
  let delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', function() {
    li.remove();   // 3. REMOVE the li when delete clicked
  });

  // 4. APPEND button into li, then li into list:
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = '';   // clear the input
});
