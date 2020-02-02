class TextButton extends Button{
    constructor(text,x,y,callback){
        super(x,y,callback);
        //Dialog title
        this.text=text;
        this.textOffset=0;

        //Coordinates of top-left corner
        this.w = sprites["text_button"].width;
        this.h = sprites["text_button"].height;
        
        //Button image
        this.img="text_button";
    }

    render(){
        drawImage(this.img,this.x,this.y,1);
        ctx.textAlign = "center";
        ctx.font = "26px Arial Black";
        ctx.fillStyle = "#999999";
        ctx.fillText(this.text,
                     this.x+this.textOffset+this.w/2,
                     this.y+this.textOffset+this.h/2+9);
    }
    
    onClickDown(){
        if(this.mouseover){
            this.img="text_button_pressed";
            this.textOffset=4;
            this.clicked=true;
        }
    }

    onClickUp(){
        this.img="text_button";
        this.textOffset=0;
        
        if(this.mouseover){
            this.clicked=false;
            this.callback();
        }
    }
}
