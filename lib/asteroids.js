

const Bullet = require('./bullet');
const Ship = require('./ship');

const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded",
  function() {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    console.log(canvas);
    console.log(ctx);
    let game = new GameView(ctx);
    game.start();
});
