class IconButton extends Button{
    constructor(icon,x,y, callback){
        super(callback);
        //Dialog title
        this.icon=icon;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
        this.w = sprites["ic/generic_garbage"].width;
        this.h = sprites["ic/generic_garbage"].height;
    }

    render(){
        drawImage("icon_button",this.x,this.y,1);
        drawImage("ic/generic_garbage",this.x+8,this.y+8,1);
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
    }
}
