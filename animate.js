function animate() { 
    animationId = requestAnimationFrame(animate); // what does this function do? By default  returns the value of the frame you are currently on
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    player.draw();
    player.update();
    enemies.forEach(enemy => { // I need to change this to .MAP
        enemy.update();
        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        //console.log(distance);
        
        // ENDGAME
        if (distance - player.radius - enemy.radius < 1) { // if the distance between player and enemy radius is less than 1 the game is paused
         cancelAnimationFrame(animationId); // do more research on this function
            // inscrease our score - I'm using TIME
            
       /*      score += 100;
            scoreElement.innerHTML = score; */
        }
    })

    //TODO

}

animate();