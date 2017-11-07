
document.addEventListener("DOMContentLoaded", function () {

var proverbContainer = document.getElementById('proverb')


function getProverb(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs")
  xhr.onload =function (){
    var newProverb= JSON.parse(xhr.responseText);
  renderHTML(newProverb);
  }
  xhr.send();
};

function renderHTML(data){
  var htmlString = "";

  htmlString+="<p id='pro'>" + "Proverb: "+data.source+"</p>"+"<p id='trans'>"+"Translation: "+ data.translation+"</p>";

  proverbContainer.insertAdjacentHTML('beforeend', htmlString);

}

document.getElementById("proverb-generator").addEventListener("click", getProverb);

})
