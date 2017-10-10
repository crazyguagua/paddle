import Game from './game';
import ImageUtil from './imageUtil'
import Paddle from './paddle'
import Ball from './ball'
import {
    KeyMap,
    log
} from './util'
log(KeyMap);
let canvas = document.querySelector('#canvas');
let w = window.innerWidth;
let h = window.innerHeight;
console.log(`w:+${w},h:${h}`);
let game = new Game(canvas, w, h);

game.start();

let imageUtil = new ImageUtil();
imageUtil.load([{
    id: 'paddle',
    url: './app/assets/images/bd.png'
}, {
    id: 'ball',
    url: '/app/assets/images/ball.png'
}], (loaded, all, imageCache) => {
    if (loaded == all) {
        let paddle = new Paddle(game, imageCache['paddle']);
        game.add(paddle);
        game.register('keydown', (keyState) => {
            if (keyState[KeyMap.LEFT] == true) {
                paddle.moveLeft();
            } else if (keyState[KeyMap.RIGHT] == true) {
                paddle.moveRight();
            }
        })
        let ball = new Ball(game,imageCache['ball']);
        game.add(ball);
    }
})
// let ctx = canvas.getContext('2d');