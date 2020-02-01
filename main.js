var cvs;
var ctx;
var imgNames=[
    "dialog_background",
    "factory_background",
    "icon_button",
    "text_button",
    
    //Icons
    "ic/generic_garbage"
];
var sprites;
var camx;
var camxgoal;

//Global ingame objects
var dlg; //Current dialog

init();

function gameLoop() {
    renderAll();
    camx = (camx*0.9+camxgoal*0.1);
    window.requestAnimationFrame(gameLoop);
}

function init(){
    cvs = document.getElementById("gameCanvas");
    ctx = cvs.getContext("2d");
    loadImages(imgNames); // calls start() after loading
}

function start(){
    dlg = new Dialog("",30,30); // test dialog
    camx = 0;
    camxgoal = 0;
    window.requestAnimationFrame(gameLoop);
}

function loadImages(names) {
    var count  = names.length;
    var loaded = function() { if (--count == 0) start(); };

    sprites = {};
    for(var n = 0 ; n < names.length ; n++) {
        var name = names[n];
        sprites[name] = new Image();
        sprites[name].onload = loaded;
        sprites[name].src = "img/" + name + ".svg";
    }
}
