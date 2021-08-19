const projectiles = [];

class Projectile extends Draw {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
}

function animate() { 
    requestAnimationFrame(animate); // what does this function do?
    ctx.clearRect(0, 0, canvas.width, canvas.height) // what exactly does this do?
    player.draw();
    player.update();

    projectiles.forEach( (projectile) => {

    })

}

window.addEventListener("Enter", () => {
    console.log('go');
})