const Bullet = require('./bullet');
const MovingObject = require('./moving_object');
const Util = require('./util');

function Ship(pos, game) {
  MovingObject.call(this, {pos: pos,
                color: "blue",
                radius: 10,
                vel: Util.randomVec(0),
                game: game});
}


Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = Util.randomVec(0);
};

Ship.prototype.power = function(impulse) {
  this.vel = [this.vel[0] + impulse, this.vel[1] + impulse];
};
Ship.prototype.left = function(impulse) {
  this.vel = [this.vel[0] - impulse, this.vel[1]];
};
Ship.prototype.right = function(impulse) {
  this.vel = [this.vel[0] + impulse, this.vel[1]];
};

Ship.prototype.fireBullet = function() {
  let bullet = new Bullet(this.pos, this.game, this.vel);
  console.log(bullet);
  this.game.bullets.push(bullet);
  console.log(this.game.bullets);
};

module.exports = Ship;
