const y = canvas.height / 2;
const x = canvas.height / 2;

class Enemy extends UniClaMethods {
    constructor(x, y, radius, color, velocity) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    
    // I need to figure out how to move this class function to UNICLAMETHODS file
    
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
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
            x: Math.cos(angle) * 4, // enemies are moving at 2X their set spped
            y: Math.sin(angle) * 4
        };

        enemies.push(new Enemy(x, y, radius, color, velocity)); // what does this do?
        console.log(enemies);
     }, 5000) 
}

spawnEnemies(); // call spawnEnemies funcion so enemies will be "spawned" on the browser 
