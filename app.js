//Global variables
const createLog = document.getElementById("vet-seeking-job-bttn"); //veteran seeking job button
const jobPostContainer = document.getElementById("job-postings-container");
const displayLogs = document.getElementById("display-logs-bttn");
const form = document.createElement('form');
const title = document.createElement("input");
const textBoxBody = document.createElement("input");
const submitBttn = document.createElement("input");
const main = document.createElement("main");
let logList = []; //list of veteran iniquiries
const endPoint = "http://localhost:3000/api/v1/logs";

form.classList = "flex flex-col justify-center items-center";
title.setAttribute("placeholder", "title");
textBoxBody.setAttribute("placeholder", "write here...");
textBoxBody.setAttribute("maxLength", "244");
submitBttn.type = "submit";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    log.loadLogs().then( (log) => {
        
    })
});

createLog.addEventListener('click', (e) => {
    e.preventDefault();
    form.append(title, textBoxBody, submitBttn);
    document.body.appendChild(form);
    console.log('render log form');
}, { once: true })

displayLogs.addEventListener('click', (e) => {
    e.preventDefault();
    log.logCard();
}, { once: true })

//POST fetch - creates a new job inquiry
form.addEventListener("submit", (e) => {
    e.preventDefault();
    log.postLogs();
})

