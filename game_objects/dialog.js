class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
        
        //Initialize pop-up animation
        this.shadow=10;
        
        this.icBtn=new IconButton(undefined,x+50,y+50);
        this.txtBtn=new TextButton("Cancel",x+50,y+100);
    }
    
    render(){
        drawImageShadow("dialog_background",this.x,this.y,this.shadow);
        this.icBtn.render();
        this.txtBtn.render();
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
    }
}
