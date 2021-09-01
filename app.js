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
const fetchApi = "http://localhost:3000/api/v1/players"

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");
    getPlayers();

})

//Retrieve players -- GET REQUEST - READ ONLY
function getPlayers() {
    fetch(fetchApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
        });
}