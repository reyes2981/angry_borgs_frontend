//canvas related variables
//Here we're storing a reference to the <canvas> element to the canvas 
//variable. Then we're creating the ctx variable to store the 2D rendering 
//context — the actual tool we can use to paint on the Canvas.
const canvas = document.querySelector('canvas'); //reference to the CANVAS element
const ctx = canvas.getContext('2d'); //context - i need to figure out why this is needed?
//canvas.hidden = true;
canvas.width = innerWidth - 2; //innerwidth is a property of a WINDOW object
canvas.height = innerHeight - 2; // resized canvas height so it fits browser 

let animationId; // confirm what this variable does again
const enemies = [];
let seconds = 00;
let tens = 00;
let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');
let interval;
const endPoint = "http://localhost:3000/api/v1/players";
const enter = document.getElementById("home");

function displayGameContainer() {
    enter.addEventListener("click", () => {
        console.log("ive been clicked");
        gameContainer();
        const player = new Player(200, y, 17, 'blue', 0.6, 0, -15);
        player.draw();
        console.log(player);
    })
}

displayGameContainer();