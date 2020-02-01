class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
        
        //Initialize pop-up animation
        this.shadow=0;
    }
    
    render(){
        drawImage("dialog_background",this.x,this.y,this.shadow);
        (camx*0.9+camxgoal*0.1);
    }
}
