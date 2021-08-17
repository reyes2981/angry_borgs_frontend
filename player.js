//const x = canvas.width / 2;
const y = canvas.height / 2;

class Player extends Draw {
    constructor(x, y, radius, color, gravity, velocity, lift) { // constructor allows for class properties to be unique for each object that is created
        super(); // You can use the super() method to call the constructor of a parent class
        this.x = x // x coordinate
        this.y = y // y coordinate
        this.radius = radius // radius of player object
        this.color = color // color of player object
        this.gravity = gravity;
        this.velocity = velocity;
        this.lift = lift;
    }

    up() {
        this.velocity += this.lift;
        console.log(this.velocity); // displays the velocity of the PLAYER object
    }

    update() {
        this.velocity += this.gravity;
        this.velocity += 0.8 ;
        this.y += this.velocity;
        this.draw();

        if (this.y > canvas.height) { // why did I need to add canvas before height?
            this.y = canvas.height;
            this.velocity = 0;
        } 
    }
}

const player = new Player(100, y, 30, 'blue', 0.6, 0, -15);
console.log(player)

function animate() { 
    requestAnimationFrame(animate); // what does this function do?
    ctx.clearRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    player.draw();
    player.update();

}

addEventListener('keyup', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
      player.up();

    }
  })

animate();


