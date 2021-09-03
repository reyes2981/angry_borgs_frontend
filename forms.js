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
    renderSignupForm();
    console.log('signup button clicked');

}, { once: true })



// SIGN UP - POST REQUEST - CREATE
function renderSignupForm() {


    form.append(emailElement);
    form.append(usernameElement);
    form.append(submitBttn);
    document.body.appendChild(form);
    console.log(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        createUser();
        console.log("player created successfully")
    });
}

function createUser() { // Going to hit CREATE method in backend API
    const formData = {
       email: emailElement.value,
       username: usernameElement.value
    }

console.log(formData);

    fetch('http://localhost:3000/api/v1/players', {
        method: 'POST',
        headers: {"Content-Type": "application/json"}, 
        body: new FormData(formData)
    })
        //Then with the data from the response in JSON...
        .then((user) => {
            console.log('Success:', user);
        })
}

