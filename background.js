function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(ctx.canvas.width/640, ctx.canvas.height/480)
    ctx.clearRect(0, 0, 640, 480);
}

function renderBackground(){
    ctx.save();
    ctx.translate(-camx, 0);
    ctx.drawImage(sprites["factory_background"],0,0,640*5,480);
    ctx.restore();
}
