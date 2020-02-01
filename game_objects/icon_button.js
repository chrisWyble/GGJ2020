class Icon_button{
    constructor(icon,x,y){
        //Dialog title
        this.icon=icon;

        //Coordinates of top-left corner
        this.x=x;
        this.y=y;
    }
    
    render(){
        drawImage("icon_button",this.x,this.y,0);
        //this.shadow=this.shadow*0.9+10*0.1;
        //this.x=this.x*0.9-10*0.1;
        //this.y=this.y*0.9-10*0.1;
    }
}
