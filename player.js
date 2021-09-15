const y = canvas.height / 2;
const x = canvas.height / 2;

class Player extends UniClassMethods {
    constructor(x, y, radius, color, gravity, velocity, lift) { // constructor allows for class properties to be unique for each object that is created
        super();
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

}

const player = new Player(200, y, 17, 'blue', 0.6, 0, -15);
console.log(player);

addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed');
      player.up();
    }
})