login_bttn.addEventListener("click", () => {
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

    formElem.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("submit clicked")

    })

   
   
            
})

