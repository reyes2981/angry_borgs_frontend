//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs
// I need to start organizing game in this file 
/* const y = canvas.height / 2;
const x = canvas.height / 2; */

function gameContainer() {
    renderCanvas();
    animatePlayer();
}

function renderCanvas() {
    animationId = requestAnimationFrame(animate); // what does this function do? By default  returns the value of the frame you are currently on
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
}

function animatePlayer() {
    player.draw();
    player.update();
}


function animate() {  // animation loop
    enemies.forEach(enemy => { // I need to change this to .MAP
        enemy.update();
        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        //console.log(distance);
        
        // ENDGAME
        if (distance - player.radius - enemy.radius < 1) { // if the distance between player and enemy radius is less than 1 the game is paused
         cancelAnimationFrame(animationId); // do more research on this function
            // inscrease our score - I'm using TIME
            clearInterval(interval); // pauses timer
        }
    // TODO: 
    // I need code that freezez timer if player touches the ground 
    // I need to slowdown timer
    })
}

/* function stopTimer() {
    clearInterval(interval);
    interval = 0;
} */


// I need to refactor code into classes
// function will run when GAME begins 
/* function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 60) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = seconds;
    }
} */

//interval = setInterval(startTimer, seconds);

