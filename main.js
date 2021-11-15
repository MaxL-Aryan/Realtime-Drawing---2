function setup()
{
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,500);
    canvas.position(600,100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#dbc602');
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
    }
}