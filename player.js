class Player {
    constructor(x, y, radius, color, velocity, gravity) { // constructor allows for class properties to be unique for each object that is created
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.gravity = gravity
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()

    }
}

const player = new Player(100, y, 30, 'blue', 0, 1);
player.draw();

console.log(player);