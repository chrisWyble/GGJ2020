var ctx;
start();

function gameLoop() {
    // do stuff
    window.requestAnimationFrame(gameLoop);
}

function start(){
    cvs = document.getElementById("gameCanvas");
    ctx = cvs.getContext('2d');
    window.requestAnimationFrame(gameLoop);
}
