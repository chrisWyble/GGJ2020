class IconButton extends Button{
    constructor(icon,x,y,callback){
        super(callback);
        
        //Button icon
        this.icon=icon;

        //Coordinates of top-left corner
        this.x = x;
        this.y = y;
        //this.w = sprites["ic/generic_garbage"].width;
        //this.h = sprites["ic/generic_garbage"].height;
        
        //Button image
        this.img="icon_button";
    }

    render(){
        drawImage(this.img,this.x,this.y,1);
        drawImage("ic/generic_garbage",this.x+8,this.y+8,1);
    }
    
    onClickDown(){
        if(this.mouseover){
            this.img="icon_button_pressed";
            this.clicked=true;
        }
    }

    onClickUp(){
        if(this.mouseover){
            this.img="icon_button";
            this.clicked=false;
            this.callback();
        }
    }
}
