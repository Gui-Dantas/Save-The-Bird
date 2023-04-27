// Player (Bow)
class Player {
  constructor(x, y, w, h, ctx) {
    this.x = x; // 0
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.speedX = 0;

    // Player Image
    const bowImage = new Image();
    bowImage.src = "docs/assets/images/bow.png";
    this.img = bowImage;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  newPos() {
    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x + 90 >= 900) {
      this.x = 810; // => 500-70
    }
    this.x += this.speedX;
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

//Enemies
class Enemy {
  constructor(x, y, w, h, enemy, ctx, img) {
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
    arrowImage.src = img;
    this.img = arrowImage;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  newPos() {
    if (this.enemy === true) {
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

  crashWith(enemies) {
    return (
      this.bottom() > enemies.top() &&
      this.top() < enemies.bottom() &&
      this.right() > enemies.left() &&
      this.left() < enemies.right()
    );
  }
}

// Bird
class Bird {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.speedY = 1;

    // Bird Image
    const birdImage = new Image();
    birdImage.src = "docs/assets/images/bird.png";
    this.img = birdImage;

    this.maxTravel = false;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

  }

  newPos() {
    if (this.y + this.h === 249) {
      this.maxTravel = true;
    }
    if (this.y === 1) {
      this.maxTravel = false;
    }

    if (this.y + this.h < canvas.height / 2 && !this.maxTravel) {
      this.y += this.speedY;
    }

    if (this.y > 0 && this.maxTravel) {
      this.y -= this.speedY;
    }
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x + 90;
  }

  right() {
    let bX = this.x + 90;
    let bW = this.w - 95;
    return bX + bW;
  }

  crashWith(enemies) {
    return (
      this.bottom() > enemies.top() &&
      this.top() < enemies.bottom() &&
      this.right() > enemies.left() &&
      this.left() < enemies.right()
    );
  }
}
