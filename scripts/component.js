// Player (Bow)
class Player{
    constructor(x, y, w, h, ctx){
        this.x = x; // 0
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
        this.ctx.drawImage(this.img, (this.x), (this.y), this.w, this.h);
    }

    newPos(){
        this.x += this.speedX;
        this.y += this.speedY;
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

//Enemies
class Enemy {
    constructor(x, y, w, h, enemy, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.enemy = enemy; 
      this.ctx = ctx;
      this.speedX = 0;
      this.speedY = 0;
      this.arrows = [];
      
      //Enemie Image
      const arrowImage = new Image();
      arrowImage.src="../images/arrow.png";
      this.img = arrowImage;
    }
  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    newPos() {
      if(this.enemy === true){
      this.x = this.speedX;
      this.y = this.speedY;
      } else {
        this.x = this.x;
        this.y = this.y;
      }
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

    crashWith(enemies){
      return(this.bottom()>enemies.top() &&
      this.top()<enemies.bottom() &&
      this.right()>enemies.left() &&
      this.left()<enemies.right())
  }
  }

  // Bird
  class Bird{
    constructor(x, y, w, h, ctx){
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        
        // Bird Image
        const birdImage = new Image();
        birdImage.src="../images/bird.png";
        this.img = birdImage;
    }

    draw(){
        this.ctx.drawImage(this.img, (this.x), (this.y), this.w, this.h);
    }

    newPos(){
        this.x = this.x;
        this.y = this.y;
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

    crashWith(enemies){
      return(this.bottom()>enemies.top() &&
      this.top()<enemies.bottom() &&
      this.right()>enemies.left() &&
      this.left()<enemies.right())
  }
}