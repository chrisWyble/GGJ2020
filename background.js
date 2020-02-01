

function renderBackground(){
    ctx.save();
    ctx.translate(-camx, 0);
    ctx.drawImage(sprites["factory_background"],0,0,640*5,480);
    ctx.restore();
}
