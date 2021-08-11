// Global variables
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight;
const y = canvas.height / 2;

/* addEventListener("keypress", function (e) { // No need to reference the WINDOW OBJECT, JavaScript does it IMPLICITLY
    if (e.key === " ") {
        //console.log(e);
        console.log("clicked");
        const projectile = new Projectile;
    }
}) */