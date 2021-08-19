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

      update() { // confirm what this class function does
          this.draw()
          this.x = this.x + this.velocity.x
          this.y = this.y + this.velocity.y
      }
}

function spawnEnemies() {
     setInterval(() => { // the first argument in set interval is a callback function - the code i want to call for each specific interval. 
        const radius = 75;
        const x = canvas.width + radius;
        const y = Math.random() * canvas.width;
        const color = 'green';
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
        const velocity = { 
            x: Math.cos(angle),
            y: Math.sin(angle)
        };

        enemies.push(new Enemy(x, y, radius, color, velocity)) // what does this do?
        console.log(enemies);
     }, 5000) 
}

let animationId;
function animate() { 
    animationId = requestAnimationFrame(animate); // returns what frame you are currently on and saves it to the variable animationId
    ctx.clearRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    //player.draw();
    player.update();

    enemies.forEach(enemy => {
        enemy.update();
        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        //console.log(distance);

        // END GAME 
        if (distance - enemy.radius - player.radius < 1) {  
         cancelAnimationFrame(animationId);
        }
    })

    //TODO
    //I need to determine the distance of player object and enemy objects
}

spawnEnemies(); 
animate();
