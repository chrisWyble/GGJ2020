class Dialog{
    constructor(title,x,y){
        //Dialog title
        this.title=title;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;

        //Initialize pop-up animation
        this.shadow=10;

        this.icBtn=new IconButton("generic_garbage",50,50, function(){});
        this.txtBtn=new TextButton("DONE",20,340, function(){dlg = undefined;});
    }

    render(){
        ctx.save();
        ctx.translate(this.x, this.y);
        drawImageShadow("dialog_background",0,0,this.shadow);
        this.icBtn.render();
        this.txtBtn.render();
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
        ctx.restore();
    }
}
