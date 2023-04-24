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
    }
    //Stops The Game
    stop(){
        clearInterval(this.intervalId);
    }
    //Clears Canvas with Background Image
    clear(){
        this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    }
}