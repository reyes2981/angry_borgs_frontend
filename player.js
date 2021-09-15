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

    up() {
        this.velocity += this.lift;
        console.log(this.velocity); // displays the velocity of the PLAYER object
    }

    draw() { 
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
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


function playerMovement() {
    addEventListener('keyup', event => {
        if (event.code === 'Space') {
            console.log('Space pressed');
            player.up();
        }
    })
}