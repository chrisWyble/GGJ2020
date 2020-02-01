class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
        
        //Initialize pop-up animation
        this.shadow=10;
        
        var icBtn=new IconButton
    }
    
    render(){
        drawImageShadow("dialog_background",this.x,this.y,this.shadow);
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
    }
}
