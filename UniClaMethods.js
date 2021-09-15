// UNIVERSAL CLASS METHODS
class UniClaMethods { 
    // GAME METHODS

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity; // changes by this.velocity 

        if (this.y > canvas.height) { // why did I need to add canvas before height?
            this.y = canvas.height;
            this.velocity = 0;
        } 

        if (this.y < 0) { // why did I need to add canvas before height?
            this.y = 0;
            this.velocity = 0;
        } 

       
    }
}

