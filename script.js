const Yes = "One Love!"
const No = "No Love!"

let response = prompt("Do you like Reggea Music?");
let nameInput = prompt("What is your name?");
document.write("Hello, " + nameInput + " welcome to my site!");
console.log(response);

if (response == "Yes"){
  document.write("One Love!");}
  else if (response == "No"){
  document.write("No Love!");} 
  else {document.write("You Found Love!");
}