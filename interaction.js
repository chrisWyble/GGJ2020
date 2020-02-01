gameCanvas.addEventListener('mousedown', handleMouseEvent);
gameCanvas.addEventListener('touchstart', handleMouseEvent);
gameCanvas.addEventListener('mousemove', handleMouseEvent);
gameCanvas.addEventListener('mouseup', handleMouseEvent);
gameCanvas.addEventListener('touchend', handleMouseEvent);
document.addEventListener("keydown",handleKeyEvent);

function handleMouseEvent(e){
    e.preventDefault();
    handleMouse(e.offsetX / screenScale.x, e.offsetY / screenScale.y, e.type);
}

function handleMouse(x, y, type){
    if(dlg){
        dlg.mouse(x,y,type);
    }else{

    }
}

function handleKeyEvent(e){
    if(e.key=="ArrowLeft"){
        camxgoal = 640*Math.floor(camx/640-.3);
        if(camxgoal < 0) camxgoal = 0;
    }
    if(e.key=="ArrowRight"){
        camxgoal = 640*Math.ceil(camx/640+.3);
        if(camxgoal > 640*4) camxgoal = 640*4;
    }
}
