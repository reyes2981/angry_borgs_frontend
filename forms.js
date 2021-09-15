/* //TODO: Refactor code in this file

// Global variables that select sign up and login elements in index.html
const loginBttn = document.getElementById("login_bttn");
const signupBttn = document.getElementById("signup_bttn");
const form = document.createElement('form');
const emailElement = document.createElement("input");
const usernameElement = document.createElement("input");
const submitBttn = document.createElement("input");

form.classList = "flex flex-col justify-center items-center"
emailElement.setAttribute("placeholder", "Email");
usernameElement.setAttribute("placeholder", "Username");
submitBttn.type = "submit";

signupBttn.addEventListener('click', (e) => {
    e.preventDefault();
    form.append(emailElement, usernameElement, submitBttn);
    document.body.appendChild(form);
    console.log('signup button clicked');

}, { once: true })

loginBttn.addEventListener('click', (e) => {
    e.preventDefault();
    form.append(emailElement, usernameElement, submitBttn);
    document.body.appendChild(form);
    console.log('login button clicked');

}, { once: true })

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // if player exists, log them in
    // loginPlayer();
    //if player does not exist, create in account
    //createUser();
    if (loginBttn === "click") {
        loginPlayer();
    }
    else if (submitBttn === "click") {
        createUser();
        console.log("player created successfully")
    }
});



// SIGN UP - POST REQUEST - CREATE
function createUser() { // Going to hit CREATE method in backend API
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
} */