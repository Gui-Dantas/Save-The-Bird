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
        desertImg.src="../images/desertBackground.jpg"
        this.img = desertImg;


    }
    // Means Starting the Game
    start(){
        this.intervalId = setInterval(this.update, 10) //Updates the Game Each 10ms
    }

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
            let minHeight = 20;// at least 20px of min Height
            let maxHeight = 20;// max height of 400px

            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

            // Top Obstacle
            this.enemies.push(new Component(x, 0, 50, height, 'green', this.ctx));
        }
    }
}