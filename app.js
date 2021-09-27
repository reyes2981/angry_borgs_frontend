const canvas = document.querySelector('canvas');// reference to the CANVAS element
const ctx = canvas.getContext('2d');
const backgroundImage = new Image();
const backgroundImage2 = new Image();
const scoreElement = document.querySelector('#scoreElement');
const enemies = [];
let animationId; // confirm what this variable does again
let score = 0;
let seconds = 00;
let tens = 00;
let appendTens;
let interval;

backgroundImage.src = 'assets/bg5 (1).jpg';
backgroundImage.position = { x: 0, y: 0};

backgroundImage2.src = 'assets/bg5 (1).jpg';
backgroundImage2.position = { x: 0, y: 0};

const backgroundSprite = new ScrollingSprite(backgroundImage, 0, 0, canvas.width, canvas.height, 1);
const backgroundSprite2 = new ScrollingSprite(backgroundImage, -canvas.width, 0, canvas.width, canvas.height, 1);
const spriteArray = [
        backgroundSprite,
        backgroundSprite2
];

canvas.width = innerWidth; //innerwidth is a property of the WINDOW object
canvas.height = innerHeight - 2; // resized canvas height so it fits browser 

addEventListener('DOMContentLoaded', (e) => {
    console.log('DOMContentLoaded')
})



//TODO 
// freeze frame should display player object - need to fix bug where player is being frozen with multiple frames
// score will be determined by amount of time before collision of canvas and enemy objects occurs  