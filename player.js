class Player {
    constructor(x, y, radius, color) { // constructor allows for class properties to be unique for each object that is created
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update() {
        this.y += 1;
        this.draw();
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(100, y, 30, 'blue');


function animate() {
    requestAnimationFrame(animate);
    player.draw();
    player.update();
    console.log('go')
}

animate();


