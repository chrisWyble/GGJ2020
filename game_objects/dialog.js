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

        ctx.drawImage(sprites["dialog_background"],x,y,w,h);
    }
}
