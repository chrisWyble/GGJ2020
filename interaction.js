gameCanvas.addEventListener("click", handleClickEvent);

function handleClickEvent(e){
    e.preventDefault();
    handleClick(e.offsetX, e.offsetY);
}

function handleClick(x, y){
    ctx.strokeStyle = "#F00";
    ctx.lineWidth = 3.0;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
}
