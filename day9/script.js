//const query = document.querySelector("p");
//console.log(query,"query");
//query.textContent = "The text has been changed!";
 
//queryselectorall
//const queryAll = document.querySelectorAll("p");
//console.log(queryAll,"queryAll");

//for (let i = 0; i < queryAll.length; i++) {
  //  queryAll[i].textContent = "pretty prachi";
//}
const para=document.getElementsByTagName("p");

for(let i=0;i<para.length;i++){
    if(i%2==0){
        para[i].style.color="blue";
    } else {
        para[i].style.color="green";    
    }
}
para[para.length-1].style.fontWeight="bold";
para[para.length-1].style.color="red";