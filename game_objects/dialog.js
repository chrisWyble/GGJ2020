class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x+10;
        this.y=y+10;
        
        //Initialize pop-up animation
        this.shadow=0;
    }
    
    render(){
        drawImage("dialog_background",this.x,this.y,this.shadow);
        this.shadow=this.shadow*0.9+10*0.1;
    }
}
