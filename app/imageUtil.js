export default class ImageUtil{

    constructor(){
        this.imageCache={}
    }

    load(urlList,cb){
        if(!urlList || urlList.length==0){
            throw new Error('urlList must be an array')
        }
        let count = urlList.length;
        let finished =0;
        let failed =false;
        let _this = this;
        urlList.forEach(function(element) {
            
            let image = new Image();
            image.src = element.url;
            _this.imageCache[element.id] = image;
            image.onload = function(){
                finished++;
                if(typeof cb == 'function'){
                    cb(finished,count,_this.imageCache);
                }
            }
            image.onerror = function(){
                failed = true;
            }
        }, this);
        
        if(typeof cb == 'function'){
            let check=function(){
                if(finished == count ||failed){
                    cb(finished,count,_this.imageCache);
                }
            }
            setTimeout(()=>{
                check()
            },30)
        }
       
        
    }
}