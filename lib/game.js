const Asteroid = require('./asteroid');
const Ship = require('./ship');

function Game () {
  this.DIM_X = 800;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.ship = new Ship(this.randomPosition(), this);
  this.bullets = [];
}

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]).concat(this.bullets);
};

Game.prototype.addAsteroids = function() {
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition(), this));
  }
  console.log(this.asteroids);
};

Game.prototype.randomPosition = function() {
  let x = Math.random() * this.DIM_X;
  let y = Math.random() * this.DIM_Y;
  return [x, y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.allObjects().forEach(function(obj) {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(function(obj) {
    obj.move();
  });
};

Game.prototype.wrap = function(pos) {
  let x = pos[0];
  let y = pos[1];
  if (x > 810) {
    x = -10;
  } else if (x < -10) {
    x = 810;
  } else if (y > 610) {
    y = -10;
  } else if (y < -10) {
    y = 610;
  }
  return [x, y];
};

Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.allObjects().length; i++) {
      let obj = this.allObjects()[i];
      for (var j = 0; j < this.allObjects().length; j++) {
        let secondObj = this.allObjects()[j];
        if (i === j) { continue; }
        else if (obj.isCollidedWith(secondObj)) {
          obj.collideWith(secondObj);
        }
      }
    }
};

Game.prototype.remove = function(asteroid) {
  this.asteroids = this.asteroids.filter(el => el !== asteroid);
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

module.exports = Game;
