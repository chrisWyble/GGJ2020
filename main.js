start();


function gameLoop() {
    // do stuff
    window.requestAnimationFrame(gameLoop);
}

function start(){
    var ctx = gameCanvas.getContext('2d');
    window.requestAnimationFrame(gameLoop);
}
