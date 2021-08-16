const enemies = [];

class Enemy extends Draw {
    constructor(x, y, radius, color, velocity) {
        super();
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
      }
}

function spawnEnemies() {
     setInterval(() => { // the first argument in set interval is a callback function
        const x = 100;
        const y = 100;
        const radius = 30
        const color = 'green'
        const velocity = { 
            x: 1,
            y: 1
        }
        enemies.push(new Enemy(x, y, radius, color, velocity)) // what does this do?
        console.log('go');
        console.log(enemies);
     }, 1000)
}

/* function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    enemy.draw();

    enemies.forEach((enemy) => {
        enemy.update();
    })
}
*/
spawnEnemies(); 
