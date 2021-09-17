class Log {

    async getLogs() {
        const response = await fetch(endPoint);
        let logs = await response.json();
        console.log(logs);
        document.getElementById('job-postings-container').innerHTML += '<li>'+
        "<h1>" + logs.title + "</h1>" + 
        "<p>" + logs.textBoxBody + "</p>" + 
        '</li>';  
        getLogs();
    }

    async postLogs() {
        console.log('log created');
    }
}

const log = new Log();
