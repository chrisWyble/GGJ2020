class Button{
    constructor(callback){
        this.clickCallback = callback;
    }

    click(x,y){
        if(x >= this.x && x <= this.x + this.w
        && y >= this.y && y <= this.y + this.h)
            this.clickCallback();
    }
}
