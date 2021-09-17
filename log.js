class Log {

    async getLogs() {
        const response = await fetch(endPoint);
        let data = await response.json();
        console.log(data);
    }

    async renderLogs() {
        const logsContainer = document.getElementById("display-logs-bttn");
        console.log(logsContainer);

    }

    async postLogs() {
        const configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(endPoint, configObj)
        //const json = await response.json()
        if (response.ok) {
            //return json
            return response
        } else {
            
        }
    } catch(error) {

    }
}

const log = new Log();
