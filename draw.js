class Draw {
    draw() { // I need to refactor this method since its being used in this class and the Player class
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}