class Log {

    constructor(title, textBoxBody) {
        this.title = title;
        this.textBoxBody = textBoxBody;
    }

    async loadLogs() {
        const request = await fetch(endPoint)
        const data = await request.json();
        logList.push(data);
        console.log(logList);
        return logList;
    }

    async postLogs() {
        const userData = {
            title: title.value,
            body: textBoxBody.value
        }
        const responseData = await fetch(endPoint, {
            method: 'POST', // Change the request method
            headers: {
                'Content-Type': 'application/json' // Change the Content-Type
            },
            body: JSON.stringify(userData) // Add data you want to send
        })
        const responseJSON = await responseData.json() // Parse the response as a JSON
        console.log(responseJSON) // Log the JSON
    }

     async logCard() {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const ul = document.createElement('ul');

     
    } 
}

const log = new Log();