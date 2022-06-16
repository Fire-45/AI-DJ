var Song1 = "";
var Song2 = "";

function preload(){

    Song1 = loadSong("music.mp3");
    Song2 = loadSong("music2.mp3");
}

function setup(){

    canvas = createCanvas(600,350);
    canvas.position(370,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,350);
}