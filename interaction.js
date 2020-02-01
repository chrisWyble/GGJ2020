gameCanvas.addEventListener("click", handleClickEvent);

function handleClickEvent(e){
    e.preventDefault();
    handleClick(e.offsetX, e.offsetY);
}

function handleClick(x, y){
    camx += x-320 // TODO remove
}
