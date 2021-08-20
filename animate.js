
function animate() { 
    animationId = requestAnimationFrame(animate); // what does this function do? By default  returns the value of the frame you are currently on
    ctx.clearRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    player.draw();
    player.update();

    enemies.forEach(enemy => { // I need to change this to .MAP
        enemy.update();
        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        //console.log(distance);

        if (distance - player.radius - enemy.radius < 1) {
         cancelAnimationFrame(animationId);
        }
    })

    //TODO

}

animate();
