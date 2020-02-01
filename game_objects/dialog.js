class Dialog{
    constructor(title,x,y,w,h){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;

        //Width and height
        this.w=w;
        this.h=h;
        
        ctx.shadowColor="#00000044";
        ctx.shadowOffsetX=10;
        ctx.shadowOffsetY=10;
        ctx.drawImage(sprites["dialog_background"],x,y,w,h);
        ctx.shadowColor="#00000000";
    }
}
