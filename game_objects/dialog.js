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
        
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img,x,y,w,h);
        };
        img.src = "logo.png";
    }
}
