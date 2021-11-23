function preload()
{
  sound = loadSound("Alarm-Fast-A1-www.fesliyanstudios.com.mp3");
}

function setup()
{
    canvas = createCanvas(480, 360);
    canvas.center()
    video = createCapture(480, 360);
    video.hide();
}

function start()
{
    objectdetect = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 480, 360);
    if(objects[i].label == object_name)
    { 
        video.stop(); 
        objectDetector.detect(gotResult);
        document.getElementById("object_status").innerHTML = object_name + " Found"; 
       synth = window.speechSynthesis; 
        utterThis = new SpeechSynthesisUtterance(object_name + "Found"); 
     synth.speak(utterThis);
        } 
        else
         {
              document.getElementById("object_status").innerHTML = object_name + " Not Found";
            } 
}


function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
















function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }

    else{
        console.log(results)
        objects = results;
    }
}