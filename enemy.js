const enemies = [];

class Enemy {
    constructor(x, y, radius, color, velocity, gravity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.gravity = gravity
    }

    draw() { // I need to refactor this method since its being used in this class and the Player class
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

function spawnEnemies() {
     setInterval(() => {
        const x = 100;
        const y = 100;
        const radius = 30
        const color = 'green'
        const velocity = { 
            x: 1,
            y: 1
        }
        enemies.push(new Enemy(x, y, radius, color, velocity)) // what does this do?
        //console.log('go');
        // console.log(enemies);
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

spawnEnemies(); */
