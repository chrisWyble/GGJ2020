class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title; // TODO use this!

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;

        //Initialize pop-up animation
        this.shadow=10;

        this.buttons = []
    }

    render(){
        ctx.save();
        ctx.translate(this.x, this.y);
        drawImageShadow("dialog_background",0,0,this.shadow);
        this.buttons.forEach(btn => btn.render())
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
        ctx.restore();
    }

    mouse(x,y,type){
        this.buttons.forEach(btn =>
            {btn.updateMouse(x-this.x,y-this.y);
            if(type=="mousedown" || type=="touchstart") btn.onClickDown();
            if(type=="mouseup" || type=="touchend") btn.onClickUp();});
    }
}
