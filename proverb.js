
document.addEventListener('DOMContentLoaded', start)

function start (){
  getProverb()
}

function getProverb(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs")
  xhr.onload =function (){
    var newProverb= JSON.parse(xhr.responseText);
  renderHTML(newProverb);
  }
  xhr.send();
};

  function renderHTML(data) {
    document.getElementById('source').innerText = data.source
    document.getElementById('translation').innerText = data.translation
  };

document.getElementById("proverb-generator").addEventListener("click", getProverb);
