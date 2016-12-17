function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
  this.game = options["game"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0],
          this.pos[1],
          this.radius,
          0,
          2 * Math.PI,
          false);
  ctx.fill();

};

MovingObject.prototype.move = function() {
  let newPos = this.game.wrap(this.pos);
  this.pos = [newPos[0] + this.vel[0], newPos[1] + this.vel[1]];
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let sumRadii = this.radius + otherObject.radius;
  let dist = Math.sqrt(
              Math.pow((this.pos[0]-otherObject.pos[0]), 2) +
              Math.pow((this.pos[1]-otherObject.pos[1]), 2));
  if (dist <= sumRadii) { return true; }
  return false;
};

MovingObject.prototype.collideWith = function(otherObject) {

};

window.MovingObject = MovingObject;

module.exports = MovingObject;
