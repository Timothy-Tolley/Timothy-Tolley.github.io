
var proverb = document.getElementById("proverb");
var genButton = document.getElementById("proverb-generator");



function getProverb(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs", false)
  xhr.onload =function (){
    var newProverb= JSON.parse(xhr.responseText);
    console.log(newProverb[0]);
  }
  xhr.send();
};


genButton.addEventListener("click", getProverb)
