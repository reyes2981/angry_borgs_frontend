//TODO: Refactor code in this file
// clear form fields once user clicks "submit" or "login"

// Global variables that select sign up and login elements in index.html
const enterGame = document.getElementById("login_bttn");
const signupBttn = document.getElementById("signup_bttn");
const form = document.createElement('form');
const emailElement = document.createElement("input");
const usernameElement = document.createElement("input");
const submitBttn = document.createElement("input");
const loginBttn = document.createElement("input");

form.classList = "flex flex-col justify-center items-center"
emailElement.setAttribute("placeholder", "Email");
usernameElement.setAttribute("placeholder", "Username");

signupBttn.addEventListener('click', (e) => {
    e.preventDefault();
    submitBttn.type = "submit";
    submitBttn.value = "Create"
    form.append(emailElement, usernameElement, submitBttn);
    document.body.appendChild(form);
    console.log('signup button clicked');
}, { once: true })

enterGame.addEventListener('click', (e) => {
    e.preventDefault();
    loginBttn.type = "button";
    loginBttn.value = "Enter Game";
    form.append(emailElement, usernameElement, loginBttn);
    document.body.appendChild(form);
    console.log('login button clicked');

}, { once: true })

 submitBttn.addEventListener('click', (e) => {
    e.preventDefault();
    createPlayer();
    console.log('player created');
}) 

// SIGN UP - POST REQUEST - CREATE
/* function renderForm() {
    form.append(emailElement, usernameElement, submitBttn);
    document.body.appendChild(form);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    }); 
} */

function createPlayer() { // Going to hit CREATE method in backend API
    const formData = {
       email: emailElement.value,
       username: usernameElement.value
    }

    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify(formData)
    }

    fetch('http://localhost:3000/api/v1/players', configObject)
        //Then with the data from the response in JSON...
        .then((user) => {
            console.log('Success:', user);
        })
}


function loginPlayer() {
    console.log("player logged in succesfully")
}