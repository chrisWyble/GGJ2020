var ctx;
start();


function gameLoop() {
    // do stuff
    window.requestAnimationFrame(gameLoop);
}

function start(){
    ctx = gameCanvas.getContext('2d');
    window.requestAnimationFrame(gameLoop);
}
