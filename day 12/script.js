//document.getElementById("input").addEventListener("change", () => {
    //document.getElementById("output").
    //textContent + "change detected";
//})
//const input = document.getElementById("input");
//input.addEventListener("change", () => {
  //  document.getElementById("output").textContent = "chanage detected";
    //console.log(input.value);
//})
const input = document.getElementById("input");
const course = document.getElementById("course");
const form = document.getElementById("form");
const output = document.getElementById("output");

//course.addEventListener("change", () => {
  //  console.log(course.value);
 //   output.textContent = course.value;

//})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = input.value;
    const courseName = course.value;
    console.log(name,courseName);
    output.textContent = name + " is enrolled in " + courseName;
})
//  const name = input.value;
//const courseName = course.value;
//  output.textContent = name + courseName;
//})                                                