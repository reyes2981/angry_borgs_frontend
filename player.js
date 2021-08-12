class Player {
    constructor(x, y, radius, color, gravity) { // constructor allows for class properties to be unique for each object that is created
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.gravity = 0.6;
        this.velocity = 0;
        this.lift = -15;
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    up() {
        this.velocity += -this.gravity * 10;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.draw();

        if (this.y > canvas.height) { // why did I need to add canvas before height?
            this.y = canvas.height;
            this.velocity = 0;
        }

     /*    if (this.y > 0) { // why did I need to add canvas before height?
            this.y = 0;
            this.velocity = 0;
        } */
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(100, y, 30, 'blue');

function animate() {
    requestAnimationFrame(animate);
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


