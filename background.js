function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function renderBackground(){
    ctx.save();
    ctx.translate(-camx, 0);
    ctx.drawImage(sprites["factory_background"],0,0,640*5,360);
    ctx.restore();
}
