class Player {
    constructor(x, y, radius, color, gravity) { // constructor allows for class properties to be unique for each object that is created
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.gravity = gravity
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update() {
        this.y += this.gravity;

    }


}

const player = new Player(100, y, 30, 'blue', 0, 1);
player.draw();
player.update();

function animate() {
        requestAnimationFrame(animate);
        console.log('go')
}

//animate();


