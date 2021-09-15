const canvas = document.querySelector('canvas'); // reference to the CANVAS element
canvas.hidden = true;
const ctx = canvas.getContext('2d'); // context - i need to figure out why this is needed?
canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight - 2; // resized canvas height so it fits browser 
let animationId; // confirm what this variable does again
const enemies = [];
let seconds = 00;
let tens = 00;
let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');
let interval;
const endPoint = "http://localhost:3000/api/v1/players"
const home = document.createElement("input");
home.setAttribute("id", "home");
home.value = "ENTER"
document.body.appendChild(home);

function displayHomePage() {
    home.addEventListener("click", () => {
    console.log("ive been clicked");
    })
}

displayHomePage();