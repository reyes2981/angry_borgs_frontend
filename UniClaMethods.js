class UniClaMethods {
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();


  }

  update() {
    this.velocity += this.gravity;
    this.velocity += 0;
    this.y += this.velocity;
    this.draw();

    if (this.y > canvas.height) {
      // why did I need to add canvas before height?
      this.y = canvas.height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      // why did I need to add canvas before height?
      this.y = 0;
      this.velocity = 0;
    }
  }
}
