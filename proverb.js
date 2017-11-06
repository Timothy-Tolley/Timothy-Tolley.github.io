
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

function renderHTML(){
  var htmlString = ""
  proverbContainer.insertAdjacentHTML('beforeend', htmlString);
}

document.getElementById("proverb-generator").addEventListener("click", getProverb)
