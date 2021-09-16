const question1 = () => {
    return new Promise((resolve) => {
        rl.question('Are you a Veteran?', (answer) => {
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve) => {
        rl.question('How many shares do you wan to buy?\n', (answer) => {
            resolve()
        })
    })
}

const main = async () => {
    await question1()
    await question2()
    displayInvestorBuy();
    companyUp();
    rl.prompt();
}

function questionyes3() {
    document.getElementById('questionc').innerHTML = "correct! Cadmium is the main component in battery acid";
    document.getElementById('questionc').style.color = "green";
  }
  
  function questionno3() {
    document.getElementById('questionc').innerHTML = "Wrong! Cadmium is the main component in battery acid";
    document.getElementById('questionc').style.color = "red";
  }
  