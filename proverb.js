
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
  for (i=0;i<data.length;i++){
  htmlString+="<p> Proverb: "+data[i].source+"</p>"+"<p> Translation: "+ data[i].translation+"</p>";

  proverbContainer.insertAdjacentHTML('beforeend', htmlString);
}
}

document.getElementById("proverb-generator").addEventListener("click", getProverb);
