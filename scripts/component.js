// Player (Bow)
class Player{
    constructor(x, y, w, h, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0; 
        
        // Player Image
        const bowImage = new Image();
        bowImage.src="../images/bow.png";
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

//ENEMIES
class Enemy {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.speedX = 0;
      this.speedY = 0;
      
      //Enemie Image
      const arrowImage = new Image();
      arrowImage.src="../images/arrow.jpg";
      this.img = arrowImage;
    }
  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    newPos() {
      this.x = this.speedX;
      this.y = this.speedY;
    }

    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.h;
    }
  
    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.w;
    }
  }