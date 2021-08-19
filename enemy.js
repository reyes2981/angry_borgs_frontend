const y = canvas.height / 2;
const x = canvas.height / 2;


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

      update() {
          this.draw()
          this.x = this.x + this.velocity.x
          this.y = this.y + this.velocity.y
      }
}

function spawnEnemies() {
     setInterval(() => { // the first argument in set interval is a callback function - the code i want to call for each specific interval. 
        const radius = 60
        const x = canvas.width + radius;
        const y = Math.random() * canvas.width;
        const color = 'green'
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
        const velocity = { 
            x: Math.cos(angle),
            y: Math.sin(angle)
        }

        enemies.push(new Enemy(x, y, radius, color, velocity)) // what does this do?
        console.log(enemies);
     }, 5000)
}

function animate() { 
    requestAnimationFrame(animate); // what does this function do?
    ctx.clearRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    player.draw();
    player.update();

    enemies.forEach(enemy => {
        enemy.update();
    })
}



spawnEnemies(); 
animate();
