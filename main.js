var ctx;
var sprites;
init();

function gameLoop() {
    // do stuff
    window.requestAnimationFrame(gameLoop);
}

function init(){
    cvs = document.getElementById("gameCanvas");
    ctx = cvs.getContext('2d');
    loadImages()
}

function start(){
    window.requestAnimationFrame(gameLoop);
    d = new Dialog("",0,0,100,100)
}

function loadImages() {

    var names = ['dialog_background'];

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
