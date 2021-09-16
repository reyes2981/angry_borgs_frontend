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


