// JS Initiation
console.log("JS is loaded!");

// Canvas Initiation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Start Button
const startButton = document.getElementById("start");

// Creat the Bird
const bird = new Bird(40, 10, 100, 100, ctx);

// Creat the player
let player = new Player(400, 350, 85, 85, ctx);
let game = new Game(ctx, canvas.width, canvas.height, player, bird);

// Arrow delay
let arrowDelay = false;

// Start Button on Click
let startFlag = false;
startButton.onclick = function () {
  if (startFlag === false) {
    game = new Game(ctx, canvas.width, canvas.height, player, bird);
    game.start();

    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          player.speedX -= 5;
          break;
        case "ArrowRight":
          player.speedX += 5;
          break;
        case "Space":
          if (!arrowDelay) {
            arrowDelay = true;
            game.shooting();
            setTimeout(() => {
              arrowDelay = false;
            }, 500);
          }
          break;
      }
    });

    // Stop Speed
    document.addEventListener("keyup", () => {
      player.speedX = 0;
      player.speedY = 0;
    });
    startFlag = true;
  }
};
