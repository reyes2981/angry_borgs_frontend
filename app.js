// reference to the CANVAS element
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // context - i need to figure out why this is needed?

canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight - 50;

let animationId; // confirm what this variable does again
const enemies = [];

//TODO 
// score will be determined by amount of time before colliding with bottom of canvas OR enemy objects