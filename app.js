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
const disableLoginButton = document.querySelector("button")

// function will run when GAME begins 
/* function startTimer() {
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
} */

//interval = setInterval(startTimer, seconds);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");
    getPlayers();

})

function getPlayers() {
    fetch('http://localhost:3000/api/v1/players')
        .then(response => response.json()) // converts to JSON
        .then(json => console.log(json)) // prints data to console

    console.log("retreived players")
}


login_bttn.addEventListener("click", () => {
    console.log("login_bttn clicked");
    disableLoginButton.disabled= true;
    
    
    const formElem = document.createElement('form');
    formElem.classList = "flex flex-col justify-center items-center"
    formElem.setAttribute("method", "post");
    formElem.setAttribute("action", "submit");
    console.log(formElem);

    const emailElement = document.createElement("input");
    emailElement.setAttribute("type", "text");
    emailElement.setAttribute("name", "email");
    emailElement.setAttribute("placeholder", "E-Mail");

    const usernameElement = document.createElement("input"); 
    usernameElement.setAttribute("type", "text");
    usernameElement.setAttribute("name", "username");
    usernameElement.setAttribute("placeholder", "Username");

    const submitElem = document.createElement("input");
    submitElem.setAttribute("type", "submit");
    submitElem.setAttribute("value", "Submit");


    document.body.appendChild(formElem);
    formElem.appendChild(emailElement); 
    formElem.appendChild(usernameElement); 
    formElem.appendChild(submitElem); 



                  
})


// toggleGame(); <- when does this need to be toggled?



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


