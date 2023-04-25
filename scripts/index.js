// JS Initiation
console.log("JS is loaded!")

// Canvas Initiation
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Start Button
const startButton = document.getElementById('start');

// Creat the Bird
const bird = new Bird(40, 10, 100, 100, ctx);

// Creat the player
const player = new Player(400, 350, 85, 85, ctx);

// Start Button on Click
let startFlag = false;
startButton.onclick = function(){
    if(startFlag === false){
    const game = new Game(ctx, canvas.width, canvas.height, player, bird);
    game.start();

    
    document.addEventListener('keydown', (e)=>{
        switch (e.code){
            case 'ArrowLeft':
                player.speedX -= 1;
                break;
            case 'ArrowRight':
                player.speedX += 1;
                break;
            case 'Space':
               game.shooting()
                break;
        }
    });
    
    // Stop Speed
    document.addEventListener('keyup', () => {
        player.speedX = 0;
        player.speedY = 0;
    })
    startFlag = true;
}
}



