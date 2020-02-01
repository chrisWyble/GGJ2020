class Button{
    constructor(callback){
        this.callback=callback;
        
        this.mouseover=false;
        this.clicked=false;
    }
    
    updateMouse(x,y){
        if(x>=this.x && x<=this.x+this.w &&
           y>=this.y && y<=this.y+this.h)
            this.mouseover=true;
        else{
            this.mouseover=false;
            this.clicked=false;
        }
    }
}
