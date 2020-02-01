

function renderBackground(){
    ctx.save();
    ctx.translate(-camx, 0);
    drawImage("factory_background",0,0,1);
    ctx.restore();
}
