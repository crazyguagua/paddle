export default class Ball{
    constructor(game,image){
        this.game = game;
        this.image = image;
        this.w = 32;
        this.h = 32;
        this.x = Math.floor(Math.random()*(game.w-this.w))
        this.y = Math.floor(Math.random()*(game.h-this.h))
        this.speedX = 10;
        this.speedY = 10;
    }
    update(){
        if((this.x+this.speedX>this.game.w-this.w) || (this.x+this.speedX<this.w)){
            this.speedX*=-1
        }
        if((this.y+this.speedY>this.game.h-this.h) || (this.y+this.speedY<this.h)){
            this.speedY*=-1
        }
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    render(){
        this.update();
        this.game.ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
}