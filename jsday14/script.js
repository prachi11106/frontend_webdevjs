//disadvantages of promise chaining
// why use async and await instead of promise chaining
//1. to avoid the promise chaining(multiple .then methods)
//2. to manage the async code workflow better than promises

// const pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resolved");
//     }, 3000);
// });
// function getData() {
//     pro.then((res) => console.log(res));
//     console.log("after promise");

// }
// getData();
// //output after 3 seconds: promise resolved
// //output: after promise

//Async and await
//to manage promise in a better way we use async and await
//1. async function always returns a promise
// async function getData() {
//     return "fetch data";
// }
// console.log(getData()); //output: Promise { 'fetch data' }

//2. await can only be used inside an async function
//it always present in front of a promise and it waits for the promise to resolve and returns the resolved value
// it pausse the async function until the promise is resolved and returns a result

// const pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resolved");
//     }, 3000);
// });

// async function getData() {
//     const value = await pro;
//     console.log(value);
// }
// getData();
// //output after 3 seconds: promise resolved

// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         let payment = true;
//         if (payment)
//             res("payment done");
//         else
//             rej("payment failed")
//     }, 3000);
// });

// async function getData() {
//     try {
//         const value = await pro;
//         console.log(value);
//         console.log("dashboard access given");
//     } catch (err) {
//         console.log(err);
//         console.log("dashboard access denied");
//     }
// }
// getData();
//output after 3 seconds: payment done
//output: dashboard access given

//fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.log(err);
//     }
// }
// // fetchData()
// //     .then((data) => console.log(data))

// async function getData(){
//     const result = await fetchData();
//     console.log(result);    
// }
// getData();
//output: array of user objects from the API

async function fetchData(city){
    const API_Key="de6620cb1fd0035d2d02a73b23fbe931";
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
    const data = await response.json();

    document.getElementById("result").innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity} %</p>
    `;

    console.log(city);
    console.log("Temp:",data.main.temp);
    console.log("Humidity:",data.main.humidity);

    }catch(error){
        console.error(error);
    }
}

function getWeather(){
    const city = document.getElementById("city").value;//get user input
    fetchData(city);
}
fetchData("Gurugram")


