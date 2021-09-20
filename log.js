class Log {
    constructor(title, textBoxBody) {
        this.title = title;
        this.textBoxBody = textBoxBody;
    }

    async loadLogs() {
        const response = await fetch(endPoint);
        let data = await response.json()
        logList.push(data);
        logList.map(log => {
            console.log(log);
        })
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

    async logCard(log) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const ul = document.createElement('ul');

        div.setAttribute("class", "log-container");
        div.setAttribute("data-id", log.id);
        h1.innerHTML = log.title;
        div.append(ul);
        ul.append(h1);
        document.body.appendChild(div);
        logList.map( log => log.renderLog(log))
    }

    async renderLog(log) {
        console.log("logs rendered");
    }

}

const log = new Log();