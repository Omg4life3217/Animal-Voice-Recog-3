//https://teachablemachine.withgoogle.com/models/BPrucRgua/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BPrucRgua/model.json',modelReady)
} 
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        comsole.error()
} else   {
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML = 'I can hear -'+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy  -'+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","
    +random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    img = document.getElementById('animal-01');
   img1 =document.getElementById('animal-02');
    img2= document.getElementById('animal-03');
    img3= document.getElementById('animal-04');
if(results[0].label=="Meowing"){
    img.src='animal-01.gif';
    img1.src='animal-02.jpg'
    img2.src='animal-03.jpg';
    img3.src='animal-04.jpg';  
}  
if(results[0].label=="meowing"){
    img.src="cat.png";
    cat=cat+1;
    
}
else if (results[0].label=="barking"){
  img.src="dog.png";
  dog=dog+1;
}
else if(results[0].label=="roar"){
  img.src="lion.jpeg";
  lion=lion+1;
}
else if(results[0].label=="mooing"){
  img.src="cow.jpeg";
  cow=cow+1;
}
else{
  img.src="oreja.png"
}
}
}