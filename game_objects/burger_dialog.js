class BurgerDialog extends Dialog{
    constructor(){
        super("Design your burger!", 30, 30);

        this.btnDone=new TextButton("DONE",20,340, function(){dlg = undefined;});
        this.buttons.push(this.btnDone);

        var b;
        var x = 335;
        var y = 70;
        ingredientNames.forEach(name => {
            b = new IconButton(name,x,y, function(){alert(this.icon)});
            x += 55;
            if(x>500){x = 335; y += 55;}
            this.buttons.push(b);
        });
    }
}
