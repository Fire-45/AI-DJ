var Song1 = "";
var Song2 = "";

score_leftWrist = "";
score_rightWrist = "";
leftWrist_songStatus = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){

    Song1 = loadSound("music.mp3");
    Song2 = loadSound("music2.mp3");
}

function setup(){

    canvas = createCanvas(600,350);
    canvas.position(370,300);
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    
    console.log("model loaded");
}

function gotPoses(result){

    console.log(result);

    leftWristX = result[0].pose.leftWrist.x;
    leftWristY = result[0].pose.leftWrist.y;
    rightWristX = result[0].pose.rightWrist.x;
    rightWristY = result[0].pose.rightWrist.y;

    score_leftWrist = result[0].pose.keypoints[9].score;

}

function draw(){
    image(video,0,0,600,350);

    fill("red");
    
    circle(rightWristX,rightWristY,40);

   leftWrist_songStatus =  Song1.isPlaying();

   if(score_leftWrist > 0.2){
        
    circle(leftWristX,leftWristY,40);
    Song2.stop();
    document.getElementById("songName").innerHTML = "Music 1";

    if(leftWrist_songStatus = false){
        Song1.play();
    }
   }

  
}