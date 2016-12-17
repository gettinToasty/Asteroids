const Util = require('./util');
const MovingObject = require('./moving_object');
const Ship = require('./ship');

function Asteroid(pos, game) {
  MovingObject.call(this, {pos: pos,
                color: "red",
                radius: 20,
                vel: Util.randomVec(3),
                game: game});
}


Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

module.exports = Asteroid;
