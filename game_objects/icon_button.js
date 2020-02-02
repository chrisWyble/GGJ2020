class IconButton extends Button{
    constructor(icon,x,y,callback){
        super(x,y,callback);
        
        //Button icon
        this.icon=icon;
        this.iconOffset=0;

        //Coordinates of top-left corner
        this.w = sprites["icon_button"].width;
        this.h = sprites["icon_button"].height;
        
        //Button image
        this.img="icon_button";
    }

    render(){
        drawImage(this.img,this.x,this.y,1);
        drawImage("ic/generic_garbage",
                  this.x+this.iconOffset+6,
                  this.y+this.iconOffset+6,
                  1);
    }
    
    onClickDown(){
        if(this.mouseover){
            this.img="icon_button_pressed";
            this.iconOffset=4;
            this.clicked=true;
        }
    }

    onClickUp(){
        this.img="icon_button";
        this.iconOffset=0;
        
        if(this.mouseover){
            this.clicked=false;
            this.callback();
        }
    }
}
