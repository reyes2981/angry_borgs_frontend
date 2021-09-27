let animationInterval;
const spriteSheet = document.getElementById("sprite-image");
const widthOfSpriteSheet = 1472;
const widthOfEachSprite = 184;

let img = new Image();

img.src = "Space_Stars2.png"
console.log(img);
canvas.appendChild(img);

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  const position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation();