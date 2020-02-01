gameCanvas.addEventListener("click", handleClickEvent);
document.addEventListener("keydown",handleKeyEvent);

function handleClickEvent(e){
    e.preventDefault();
    handleClick(e.offsetX, e.offsetY);
}

function handleClick(x, y){
    // TODO
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
