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
function favArtist(){
    let response = prompt("Who is your favorite artist?");
    document.write(response);
  }
  favArtist();