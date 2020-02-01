class TextButton extends Button{
    constructor(text,x,y, callback){
        super(callback);
        //Dialog title
        this.text=text;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
    }

    render(){
        drawImage("text_button",this.x,this.y,1);
        ctx.textAlign = "center";
        ctx.font = "26px Arial Black";
        ctx.fillStyle = "#999999";
        ctx.fillText(this.text,
                     this.x+sprites["text_button"].width/2,
                     this.y+sprites["text_button"].height/2+9);
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
    }
}
