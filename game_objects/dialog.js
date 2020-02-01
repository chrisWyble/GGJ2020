class Dialog{
    constructor(title,x,y,w,h){
        //Dialog title
        this.title = title;
        
        //Coordinates of top-left corner
        this.x = x;
        this.y = y;
        
        //Width and height
        this.w = w;
        this.h = h;
        
        var img = new Image();
        img.src = "../img/dialog_background.svg";
        ctx.drawImage(img,x,y,w,h);
    }
}

var dlg = new Dialog("Hello, world!",50,50,590,310);
