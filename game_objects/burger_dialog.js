class BurgerDialog extends Dialog{
    constructor(){
        super("Design your burger!", 30, 30);

        this.icBtn=new IconButton("generic_garbage",50,50, function(){});
        this.txtBtn=new TextButton("DONE",20,340, function(){dlg = undefined;});

        this.buttons.push(this.icBtn);
        this.buttons.push(this.txtBtn);
    }
}
