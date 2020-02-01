class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
    }
    
    render(){
        drawImage("dialog_background",this.x,this.y,10);
    }
}
