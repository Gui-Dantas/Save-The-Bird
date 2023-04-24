// JS Initiation
console.log("JS is loaded!")

// Canvas Initiation
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Start Button
const startButton = document.getElementById('start');

// Creat the player
const player = new Component(0, 200, 75, 75, 'blue', ctx);

// Start Button on Click
startButton.onclick = function(){
    const game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();

// Move the player  
document.addEventListener('keydown', (e)=>{
    switch (e.code){
        case 'ArrowLeft':
            player.speedX -= 1;
            break;
        case 'ArrowRight':
            player.speedX += 1;
            break;
        }
    });
    
    // Stop Speed
    document.addEventListener('keyup', () => {
        player.speedX = 0;
        player.speedY = 0;
    })

    
}



