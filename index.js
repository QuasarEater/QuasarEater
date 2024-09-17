const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let password;

mySubmit.onclick = function(){
    password = myText.value;
    password = Number(password);

    if(password==23){
      console.log("You did it");
    }
}