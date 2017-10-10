
import ImageUtil from './imageUtil'
import Paddle from './paddle'
import {log} from './util'
export default class Game{
    
    constructor(canvas,w,h,fps){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.w = w;
        this.h = h;
        this.init();
        this.initEvents();
        this.fps = fps||30
    }
    init(){
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.cFrame=0;
        this.realFps =0;
        this.startFps =0;
        this.objs=[]
        
    }
    initEvents(){
        this.events={}
        let _this = this;
        this.keyState={};
        document.addEventListener('keydown',(ev)=>{
            
            let keyCode = ev.keyCode;
            this.keyState[keyCode] = true;
            // log('keydown');
            _this.events['keydown'] && _this.events['keydown'].forEach((fn)=>{
                fn.call(null,this.keyState);
            })
        },true);
        document.addEventListener('keyup',(ev)=>{
            let keyCode = ev.keyCode;
            this.keyState[keyCode] = false;
        })
    }
    add(obj){
        this.objs.push(obj);
    }
    start(){
        this.sTime = new Date();
        this.timer = setInterval(()=>{
            this.fpsCount++;
            let cTime = new Date();
           
            this.cFrame++;
            this.ctx.clearRect(0,0,this.w,this.h);
            this.ctx.fillText(`CURRENT FRAME  /  ${this.cFrame}`,20,20)
            this.ctx.fillText(`CURRENT FPS  /  ${this.realFps}`,20,50) 
             //实际帧数
             if(cTime - this.sTime > 1*1000){
                //  console.log(this);
                  this.realFps = this.cFrame-this.startFps;
                  this.startFps = this.cFrame;
                  this.sTime = cTime;   
            }
            this.update();   
        },1000/this.fps)
    }
    update(){
       this.objs.forEach((obj)=>{
            obj.render(this.ctx);
       })
    }
    register(eventName,obj){
        let arr = this.events[eventName] =  this.events[eventName] ||[];
        for(let i=0;i<arr.length;i++){
            if(obj==arr[i]){
                return;
            }
        }
        arr.push(obj);
    }
}