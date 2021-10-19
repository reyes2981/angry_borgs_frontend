const canvas = document.querySelector('canvas');// reference to the CANVAS element
const ctx = canvas.getContext('2d');
const enemies = [];

canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight - 2; // resized canvas height so it fits browser 

const x = canvas.width / 2;
const y = canvas.height / 2;

class Player {
    constructor(x, y, radius, color, gravity, velocity, lift) { // constructor allows for class properties to be unique for each object that is created
        this.x = x; // x coordinate
        this.y = y; // y coordinate
        this.radius = radius; // radius of player object
        this.color = color; // color of player object
        this.gravity = gravity;
        this.velocity = velocity;
        this.lift = lift;
    }

    draw() {
        ctx.beginPath(); //reference context and call beginPath to indicate we want to start drawing on the screen
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    up() {
        this.velocity += this.lift;
        console.log(this.velocity); // displays the velocity of the PLAYER object
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity; // changes by this.velocity 

        if (this.y > canvas.height) { // why did I need to add canvas before height?
            this.y = canvas.height;
            this.velocity = 0;
        }

        if (this.y < 0) { // why did I need to add canvas before height?
            this.y = 0;
            this.velocity = 0;
        }
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.velocity += this.gravity;
        this.y += this.velocity; // changes by this.velocity 

        if (this.y > canvas.height) { // why did I need to add canvas before height?
            this.y = canvas.height;
            this.velocity = 0;
        }

        if (this.y < 0) { // why did I need to add canvas before height?
            this.y = 0;
            this.velocity = 0;
        }
    }
}

const player = new Player(200, y, 17, 'blue', 0.6, 0, -15);
player.draw();


addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log('Space pressed');
        player.up();
    }
})

function animate() {
    animationId = requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw();
    player.update();
    enemies.forEach(enemy => {
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

animate();
spawnEnemies(); // call spawnEnemies funcion so enemies will be "spawned" on the browser 

/* let animationId; // confirm what this variable does again
let score = 0;
let seconds = 00;
let tens = 00;
let appendTens;
const scoreElement = document.querySelector('#scoreElement');
let interval;

backgroundImage.position = { x: 0, y: 0}; */

//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs  