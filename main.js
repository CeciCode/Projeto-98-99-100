setTimeout(function() {
    imgId= "selfie1";
    takeSelfie();
    speakDate= "Tirando sua selfie em 10 segundos";
    var utterThis= new SpeechSynthesisUtterance(speakData);
    SpeechSynthesis.speak(utterThis);
}, 10000);
setTimeout(function() {
    imgId= "selfie2";
    takeSelfie();
    speakDate= "Tirando sua selfie em 10 segundos";
    var utterThis= new SpeechSynthesisUtterance(speakData);
    SpeechSynthesis.speak(utterThis);
}, 10000);
setTimeout(function() {
    imgId= "selfie3";
    takeSelfie();
    speakDate= "Tirando sua selfie em 10 segundos";
    var utterThis= new SpeechSynthesisUtterance(speakData);
    SpeechSynthesis.speak(utterThis);
}, 10000);
function takeSelfie() {
    console.log(imgId);
    WebKitCSSMatrix.snap(function(data_uri) {
        if (imgId == "selfie1") {
            document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if (imgId == "selfie2") {
            document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if (imgId == "selfie3") {
            document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}