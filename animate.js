function animate() { 
    requestAnimationFrame(animate); // what does this function do?
    ctx.clearRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    player.draw();
    player.update();

    enemies.forEach(enemy => {
        enemy.update();
        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        //console.log(distance);

        if (distance - enemy. radius - enemy. radius < 1) {
            console.log('player hit enemy');
        }
    })

    //TODO

    //I need to determine the distance of player object and enemy objects
}

animate();
