var ctx;
var sprites;
var camx;
init();

function gameLoop() {
    clearScreen();
    renderBackground();
    window.requestAnimationFrame(gameLoop);
}

function init(){
    cvs = document.getElementById("gameCanvas");
    ctx = cvs.getContext('2d');
    var imgNames = ['dialog_background', 'factory_background'];
    loadImages(imgNames) // calls start() after loading
}

function start(){
    d = new Dialog("",50,50,540,260); // test dialog
    camx = 0;
    window.requestAnimationFrame(gameLoop);
}

function loadImages(names) {
    var count  = names.length;
    var loaded = function() { if (--count == 0) start(); };

    sprites = {}
    for(var n = 0 ; n < names.length ; n++) {
        var name = names[n];
        sprites[name] = new Image()
        sprites[name].onload = loaded;
        sprites[name].src = "img/" + name + ".svg";
    }
}
