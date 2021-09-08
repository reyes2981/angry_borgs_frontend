//TODO: Refactor code in this file

// Global variables that select sign up and login elements in index.html
const loginBttn = document.getElementById("login_bttn");
const signupBttn = document.getElementById("signup_bttn");
const form = document.createElement('form');
const emailElement = document.createElement("input");
const usernameElement = document.createElement("input");
const submitBttn = document.createElement("input");
const enterGame = document.createElement("input");



form.classList = "flex flex-col justify-center items-center"
emailElement.setAttribute("placeholder", "Email");
usernameElement.setAttribute("placeholder", "Username");
submitBttn.type = "submit";
enterGame.type = "submit"
enterGame.value = "Login"

signupBttn.addEventListener('click', (e) => {
    e.preventDefault();
    renderForm();
    console.log('signup button clicked');

}, { once: true })

loginBttn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('login button clicked');

}, { once: true })

submitBttn.addEventListener('click', (e) => {
    e.preventDefault();
    createPlayer();
    console.log('player created');
})

// SIGN UP - POST REQUEST - CREATE
function renderForm() {
    form.append(emailElement, usernameElement);
    document.body.appendChild(form);
  /*   form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("rendered form")
    }); */
}

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

// LOGIN - POST REQUEST - CREATE
function renderLoginForm() {
    form.append(emailElement, usernameElement, submitBttn);
    document.body.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        loginPlayer();
        console.log("player logged in succesfully")
    });
}

function loginPlayer() {
    console.log("player logged in succesfully")
}