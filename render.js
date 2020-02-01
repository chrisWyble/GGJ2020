function drawImage(img,x,y,shadow){
    if(shadow != 0){
        ctx.shadowColor="#00000044";
        ctx.shadowOffsetX=shadow;
        ctx.shadowOffsetY=shadow;
    }
    
    ctx.drawImage(sprites[img],x,y);
    
    if(shadow != 0)
        ctx.shadowColor="#00000000";
}
