var Song1 = "";
var Song2 = "";

score_leftWrist = "";
leftWrist_songStatus = "";

score_rightWrist = "";
rightWrist_songStatus = "";

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
    score_rightWrist = result[0].pose.keypoints[10].score;

}

function draw(){
    image(video,0,0,600,350);

    fill("red");
    
   leftWrist_songStatus =  Song1.isPlaying();
   rightWrist_songStatus = Song2.isPlaying();

   if(score_leftWrist > 0.2){
        
    circle(leftWristX,leftWristY,40);
    Song2.stop();
    document.getElementById("songName").innerHTML = "Music 1";
    console.log(leftWrist_songStatus);

    if(leftWrist_songStatus = false){
        Song1.play();
    }
   }

   if(score_rightWrist > 0.2){

    circle(rightWristX,rightWristY,40);
    Song1.stop();
    document.getElementById("songName").innerHTML = "Music 2";
    console.log(rightWrist_songStatus);

    if(rightWrist_songStatus = false){
        Song2.play();
    }
    

   }

  
}