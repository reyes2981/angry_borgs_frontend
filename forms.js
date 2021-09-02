// Global variables that select sign up and login elements in index.html
const loginBttn = document.getElementById("login_bttn");
const signupBttn = document.getElementById("signup_bttn");

signupBttn.addEventListener('click', (e) => {
    e.preventDefault();
    renderSignupForm();
    console.log('signup button clicked');

}, { once: true })


// SIGN UP - POST REQUEST - CREATE
function renderSignupForm() {

    function submitHandler(e) {
        console.log('clicked')
        e.preventDefault();
    }

    const form = document.createElement('form');
    const emailElement = document.createElement("input");
    const usernameElement = document.createElement("input");
    const submitBttn = document.createElement("input");

    emailElement.setAttribute("placeholder", "Email");
    usernameElement.setAttribute("placeholder", "Username");
    submitBttn.type = "submit";

    form.addEventListener("submit", submitHandler);
    form.append(emailElement);
    form.append(usernameElement);
    form.append(submitBttn);
    document.body.appendChild(form);
    console.log(form);

 /*    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        createPlayer();
        console.log('player created successfully');
    })

    formContainer.classList = "flex flex-col justify-center items-center"

    emailElement.setAttribute("type", "text");
    emailElement.setAttribute("placeholder", "Email");

    usernameElement.setAttribute("type", "text");
    usernameElement.setAttribute("placeholder", "Username");
    
    submitBttn.setAttribute("type", "submit");
    submitBttn.setAttribute("value", "Create Player");

    formContainer.append(emailElement, usernameElement, submitBttn);
    document.body.appendChild(formContainer);
    console.log(formContainer); */
}

function createPlayer() { // Going to hit CREATE method in backend API

    const formData = {
        username: "",
        email: "",
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(formData)
    };

    fetch(fetchApi, configObj)

}

