// Global variables that select sign up and login elements in index.html
const loginBttn = document.getElementById("login_bttn");
const signupBttn = document.getElementById("signup_bttn");
const email = document.getElementById('email');
const username = document.getElementById('username');


signupBttn.addEventListener('click', (e) => {
    e.preventDefault();
    renderForm();
    console.log('signup button clicked');

}, { once: true })


function renderForm() {
    const formContainer = document.createElement('div');
    const f = document.createElement('form');

    const emailElement = document.createElement("input");
    const usernameElement = document.createElement("input");       
    const submitBttn = document.createElement("input");

    formContainer.classList = "flex flex-col justify-center items-center"

    emailElement.setAttribute("type", "text");
    emailElement.setAttribute("placeholder", "Email");
    emailElement.setAttribute("id", "email");

    usernameElement.setAttribute("type", "text");
    usernameElement.setAttribute("placeholder", "Username");
    usernameElement.setAttribute("id", "username");

    submitBttn.setAttribute("type", "submit");

    document.body.appendChild(formContainer);
    formContainer.appendChild(f);
    f.appendChild(emailElement);
    f.appendChild(usernameElement);
    f.appendChild(submitBttn); 
    console.log(formContainer);

    f.addEventListener("submit", (e) => {

        e.preventDefault();
        console.log('player created');
        //createPlayer(email, username);

    })


}

// SIGN UP - POST REQUEST - CREATE
function createPlayer(username, email) { // Going to hit CREATE method in backend API
    
    console.log(username, email)

    const formData = {
        username: username,
        email: email
    } 

    fetch(fetchApi, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(formData)
    }) 
    .then(response => response.json()) 
    .then(player => {
        console.log(player); 
        const apptData = player.data
        // render JSON response
        //let newPlayer = new Player(apptData, apptData.attributes)
        console.log(apptData);
    })
}