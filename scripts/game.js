class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        //Background Image
        const desertImg = new Image();
        desertImg.src="../images/jungle.jpg"
        this.img = desertImg;


    }
    // Means Starting the Game
    start(){
        this.intervalId = setInterval(this.update, 10) //Updates the Game Each 10ms
    }
    // Updating the Game
    update = () => {
        this.frames++;
        this.clear();
        this.player.newPost();
        this.player.draw();
        this.updateEnemies();
    }
    //Stops The Game
    stop(){
        clearInterval(this.intervalId);
    }
    //Clears Canvas with Background Image
    clear(){
        this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    }

    // Updates Enemies
    updateEnemies(){
    for (let i = 0; i<this.enemies.length ; i++){
        this.enemies[i].x -= 1;// Enemy goes More to the Right
        this.enemies[i].draw();// Continue to Draw Enemy
    }
    if (this.frames % 200 === 0){
        let x = 1200;
        let minHeight = 10;// at least 2px of min Height
        let maxHeight = 10;// max height of 2px
            
        let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        let randomY = Math.floor(Math.random() * 110);
            
    // Top Obstacles
        this.enemies.push(new Enemy(x, randomY, 80, height, this.ctx));    
        }
    }
    
    
}
        