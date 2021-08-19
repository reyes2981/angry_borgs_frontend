// reference to our canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // context - i need to figure out why this is needed?

canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight;


//TODO 
// refactor draw functions
// do further research on projectile trajectory using javascript    