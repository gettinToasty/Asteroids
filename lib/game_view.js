const Game = require('./game');
const KeyMaster = require('../keymaster');
const Bullet = require('./bullet');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
  this.game.addAsteroids();
}

GameView.prototype.bindKeyHandlers = function() {
  window.key('w', () => {
    this.game.ship.power(1.5);
  });
  window.key('s', () => {
    this.game.ship.power(-1.5);
  });
  window.key('a', () => {
    this.game.ship.left(1.5);
  });
  window.key('d', () => {
    this.game.ship.right(1.5);
  });
  window.key('q', () => {
      let bullet = new Bullet(this.game.ship.pos, this.game, this.game.ship.vel);
      console.log(bullet);
      this.game.bullets.push(bullet);
      console.log(this.game.bullets);
    }
  );
};

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  setInterval(function() {
    this.game.step();
    this.game.draw(this.ctx);
  }.bind(this), 20);
};

module.exports = GameView;
