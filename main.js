Webcam.set({
    width : 350,
    height : 300,
    image_format :'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Captured").innerHTML = '<img id = "Captured image" src = "'+data_uri+'">';
    })
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jPnYtC8N9/model.json', modelloaded);
function modelloaded(){
    console.log("Model Loaded!");
}

function check(){

    img = document.getElementById('Captured image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){

    if(error){
        console.error(error);
    }

    else{

        console.log(result);
        document.getElementById("Object_name").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}