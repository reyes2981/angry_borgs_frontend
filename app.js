const canvas = document.querySelector('canvas'); // reference to the CANVAS element
const ctx = canvas.getContext('2d'); // context - i need to figure out why this is needed?
canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight - 2; // resized canvas height so it fits browser 
const scoreElement = document.querySelector('#scoreElement');
console.log(scoreElement);
let animationId; // confirm what this variable does again
const enemies = [];
let seconds = 00;
let tens = 00;
let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');
let interval;

// function will run when GAME begins 
function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 60) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = seconds;
    }
}

interval = setInterval(startTimer, seconds);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");

})

login_bttn.addEventListener("click", () => {
    console.log("login_bttn clicked");
    canvas.style.display="none";
    
    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
})


function stopTimer() {
    clearInterval(interval);
    interval = 0;
}

//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs
// 


