// reference to the CANVAS element
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // context - i need to figure out why this is needed?

canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight - 2; // resized canvas height so it fits browser 

const scoreElement = document.querySelector('#scoreElement');
console.log(scoreElement);

let animationId; // confirm what this variable does again
let score = 0;
const enemies = [];

let seconds = 00;
let tens = 00;
let appendTens;
let interval;

//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs
// 
