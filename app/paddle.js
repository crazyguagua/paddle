import Util from './util' 
export default class Paddle{
    constructor(game,image){
        this.game = game;
        this.image = image;
        this.w = 98;
        this.h = 32;
        this.x = game.w/2-this.w/2;
        this.y = game.h/2-this.h/2;
        this.speed = 10;   
    }
    render(){
        this.game.ctx.drawImage(this.image,this.x,this.y)
    }
    moveLeft(){  
        this.x= Math.max(0,this.x-this.speed)
    }
    moveRight(){    
        this.x =Math.min(this.game.w-this.w,this.x+this.speed)
    }
}