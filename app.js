const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); 
canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight;

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
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() { // I need to refactor this method since its being used in this class and the Player class
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const y = canvas.height / 2;

const player = new Player(100, y, 30, 'blue');
player.draw();

console.log(player);

addEventListener("keypress", function(e) { // No need to reference the WINDOW OBJECT, JavaScript does it IMPLICITLY
    if (e.key === "a") {
        //console.log(e);
        console.log("clicked");
        const projectile = new Projectile;
}
})