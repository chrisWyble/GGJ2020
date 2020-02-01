class TextButton extends Button{
    constructor(text,x,y,callback){
        super(callback);
        //Dialog title
        this.text=text;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
        this.w = sprites["text_button"].width;
        this.h = sprites["text_button"].height;
        
        //Button image
        this.img="text_button";
    }

    render(){
        drawImage("text_button",this.x,this.y,1);
        ctx.textAlign = "center";
        ctx.font = "26px Arial Black";
        ctx.fillStyle = "#999999";
        ctx.fillText(this.text,
                     this.x+sprites["text_button"].width/2,
                     this.y+sprites["text_button"].height/2+9);
    }
    
    onClickDown(){
        if(this.mouseover)
            this.img="text_button_pressed";
    }

    onClickUp(){
        if(!this.mouseover){
            this.img="text_button";
            this.callback();
        }
    }
}
