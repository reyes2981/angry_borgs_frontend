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
        console.log('go')
     }, 1000)
}

spawnEnemies();
