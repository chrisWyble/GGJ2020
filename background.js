

function renderBackground(){
    ctx.save();
    ctx.translate(-camx, 0);
    drawImage("factory_background",0,0,0);
    ctx.restore();
}
