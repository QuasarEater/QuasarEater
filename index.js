const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
const rpass = document.getElementById("resred");
let password;

mySubmit.onclick = function(){
    password = myText.value;

    if(password === "livro" || password === "Livro"){
        window.location.href = "/secret/index.html";
    }

    else if(password === "sonho" || password === "Sonho"){
        window.location.href = "sonho/sonho.html";
    }

    else if(password === "realidade" || password === "Realidade"){
        window.location.href = "realidade/realidade.html";
    }

    else{
        resultElement.textContent = ("A pedra se apaga sem acontecer nada!");
    }
}

// Get the input field
var input = document.getElementById("myText");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("mySubmit").click();
  }
});