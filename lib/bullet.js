const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const Util = require('./util');

function Bullet(pos, game, vel) {
  MovingObject.call(this, {pos: pos,
                color: "black",
                radius: 2,
                vel: [vel[0] * 2, vel[1] * 2],
                game: game});
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(asteroid) {
  if (asteroid instanceof Asteroid) {
    this.game.remove(asteroid);
    this.game.remove(this);
  }
};

module.exports = Bullet;
