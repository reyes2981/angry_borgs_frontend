/* const loginBttn = document.getElementById("login_bttn");
const signupBttn = document.getElementById("signup_bttn");

loginBttn.addEventListener('click', () => {
    console.log('login button clicked');

}, { once: true }) // Use addEventListener instead, and you can attach the listener with a once option, which means it will only run once

signupBttn.addEventListener('click', () => {
    createForm();
    console.log('signup button clicked');

}, { once: true })

function createForm() {

    const formElem = document.createElement('form');
    formElem.classList = "flex flex-col justify-center items-center"

    const emailElement = document.createElement("input");
    emailElement.setAttribute("type", "text");
    emailElement.setAttribute("name", "email");
    emailElement.setAttribute("placeholder", "E-Mail");
    emailElement.setAttribute("id", "email");

    const usernameElement = document.createElement("input");
    usernameElement.setAttribute("type", "text");
    usernameElement.setAttribute("name", "username");
    usernameElement.setAttribute("placeholder", "Username");
    usernameElement.setAttribute("id", "username");

    const submitElem = document.createElement("input");
    submitElem.setAttribute("type", "submit");
    submitElem.setAttribute("value", "Submit");

    document.body.appendChild(formElem);
    formElem.appendChild(emailElement);
    formElem.appendChild(usernameElement);
    formElem.appendChild(submitElem);
    console.log(formElem);
    formElem.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("submit clicked")
    })

  
}

function playerSignup() {

    const email = document.getElementById('email');
    const username = document.getElementById('username');

    let formData = {
        username: username.value,
        email: email.value
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",

        },
        body: JSON.stringify(formData)
    };


    fetch(fetchApi, configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
        });
} */