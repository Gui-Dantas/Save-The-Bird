class Game {
  constructor(ctx, width, height, player, bird) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.bird = bird;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
    this.arrows = [];
    this.score = 0;

    //Background Image
    const desertImg = new Image();
    desertImg.src = "../images/jungle.jpg";
    this.img = desertImg;
  }

  // Means Starting the Game
  start() {
    this.intervalId = setInterval(this.update, 10); //Updates the Game Each 10ms
  }

  // Updating the Game
  update = () => {
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.bird.newPos();
    this.bird.draw();
    this.updateEnemies();
    this.updateArrows();
    this.checkBird();
    this.checkGameOver();

    console.log(this.arrows.length);
  };

  //Stops The Game
  stop() {
    clearInterval(this.intervalId);
    startFlag = false;
  }

  //Clears Canvas with Background Image
  clear() {
    this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
  }

  // Updates Enemies
  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].x -= 6; // Enemy goes More to the Right
      this.enemies[i].draw(); // Continue to Draw Enemy
    }
    if (this.frames % 200 === 0) {
      let x = 1200;
      let minHeight = 10; // at least 10px of min Height
      let maxHeight = 10; // max height of 10px

      let height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
      );
      let randomY = Math.floor(Math.random() * 110);

      // Top Obstacles
      this.enemies.push(
        new Enemy(x, randomY, 80, height, true, this.ctx, "../images/enemyArrow.png")
      );
    }
  }

  // Shooting
  shooting() {
    let x = this.player.x + this.player.w / 2 - 5;
    let y = this.player.y + this.player.h / 2 - 50;

    this.arrows.push(
      new Enemy(x, y, 10, 50, false, this.ctx, "../images/arrow.png")
    );
  }

  // Updating the Player Arrows
  updateArrows() {
    for (let i = 0; i < this.arrows.length; i++) {
      this.arrows[i].y -= 5;
      this.arrows[i].newPos();
      this.arrows[i].draw();

      if (this.arrows[i].y < 0) {
        this.arrows.splice(i, 1);
      }

      // Check for collision with Enemies
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.arrows[i].crashWith(this.enemies[j])) {
          this.arrows.splice(i, 1);
          this.enemies.splice(j, 1);
          this.score += 1
        }
      }
    }
  }

  // Check for collision between bird and enemies
  checkBird() {
    for (let j = 0; j < this.enemies.length; j++) {
      if (this.bird.crashWith(this.enemies[j])) {
        console.log("bird hit");
        this.stop();
      }
    }
  }

  checkGameOver() {
    const crashed = this.enemies.some((enemy) => {
      return this.bird.crashWith(enemy);
    });
    if (crashed) {
      ctx.fillStyle = "brown";
      ctx.fillRect(250, 100, 400, 250);
      ctx.font = "32px Arial";
      ctx.fillStyle = "red";
      ctx.fillText("Game Over", 365, 160);
      ctx.fillStyle = "white";
      ctx.fillText("Your final score:", 335, 230);
      this.ctx.fillText(`${this.score}`, 433, 300);
      this.stop();
    }
  }
}
