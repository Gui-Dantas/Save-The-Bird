class Component{
    constructor(x, y, w, h, color, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0; 
        
        // Player Image
        const bowImage = new Image();
        bowImage.src="../images/bow.png"
        this.img = bowImage;
    }

    draw(){
        this.ctx.drawImage(this.img, (this.x+400), (this.y+150), this.w, this.h);
    }

    newPost(){
        this.x += this.speedX;
        this.y += this.speedY
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }
}