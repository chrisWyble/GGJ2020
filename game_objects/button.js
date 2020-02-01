class Button{
    constructor(callback){
        this.clickCallback = callback;
    }

    click(){
        this.clickCallback();
    }
}
