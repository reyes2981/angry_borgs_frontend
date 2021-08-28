const login_bttn = document.getElementById("login_bttn");
const signup_bttn = document.getElementById("signup_bttn");

login_bttn.addEventListener('click', () => {
    createForm();
    console.log('login button clicked');
}) 


//let form = new Form(); // calls a new form and saves it to the variable 'form'
function createForm () {
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
    }

