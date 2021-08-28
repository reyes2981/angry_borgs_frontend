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
const login_bttn = document.getElementById("login_bttn");
const signup_bttn = document.getElementById("signup_bttn");
const disableFormButtons = document.getElementsByClassName("player-forms")
const fetchApi = 'http://localhost:3000/api/v1/players';

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");

})

function requestLogin () {
    console.log("Requesting login");
}

function stopTimer() {
    clearInterval(interval);
    interval = 0;
}

//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs
// 


