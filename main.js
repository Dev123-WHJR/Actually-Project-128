song = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;




function preload()
{
  song = loadSound(""); 
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    image(video,20,10,600,500)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

  function modelLoaded()
  {
    console.log('PoseNet is initialised');
  }


function draw()
{
  video(0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
  }

function gotPoses(results)
{
  if (results.length > 0 )
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("Left wrist x  = " + leftWristX + "Left wrist y = " + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("Right wrist x  = " + rightWristX + "Right wrist y = " + rightWristY);
  }
}