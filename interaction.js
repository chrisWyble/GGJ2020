gameCanvas.addEventListener("click", handleClickEvent);
document.addEventListener("keydown",handleKeyEvent);

function handleClickEvent(e){
    e.preventDefault();
    handleClick(e.offsetX, e.offsetY);
}

function handleClick(x, y){
    camx += x-320 // TODO remove
}

function handleKeyEvent(e){
    if(e.key=="ArrowLeft"){
        camxgoal = 640*Math.floor(camx/640-.3);
    }
    if(e.key=="ArrowRight"){
        camxgoal = 640*Math.ceil(camx/640+.3);
    }
}
